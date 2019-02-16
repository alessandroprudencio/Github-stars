<template>
  <div id="app">
    <router-view/>
    <v-container>
      <area-pesquisa/>

      <!-- <v-layout row>
        <v-flex xs3 md4>
          <menu-lateral/>
        </v-flex>
        <v-flex xs9 md10>
          <conteudo/>
        </v-flex>
      </v-layout> -->

      <v-layout row>
        <v-flex xs9 md12>
          <user-not-found/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import areaPesquisa from "@/components/area-superior/area-pesquisa";
import menuLateral from "@/components/menu-lateral/menu-lateral";
import conteudo from "@/components/conteudo/conteudo";
import userNotFound from "@/components/conteudo/user-not-found";

export default {
  name: "App",
  components: { areaPesquisa, menuLateral, conteudo, userNotFound }
};
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>

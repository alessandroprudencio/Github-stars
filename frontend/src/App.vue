<template>
  <div id="app" class="fadeIn" >
    <router-view/>
    <v-container v-if="usuario" >
      <area-pesquisa/>
       <v-layout row v-if="dados" >
        <v-flex xs3 md4>
          <menu-lateral/>
        </v-flex>
        <v-flex xs9 md10>
          <conteudo/>
        </v-flex>
      </v-layout> 

      <v-layout v-else row>
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
import { mapState } from 'vuex';

export default {
  name: "App",
  components: { areaPesquisa, menuLateral, conteudo, userNotFound },
  computed:{
      dados(){
        return this.$store.state.dadosStarsUser !=''
      }
  },
};
</script>

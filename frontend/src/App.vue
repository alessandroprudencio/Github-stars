<template>
  <div id="app" class="fadeIn">
    <router-view/>
    <v-container>
      <area-pesquisa v-if="usuarioLogado" :avatar="avatar"/>
      <v-layout row v-if="usuarioLogado && dados">
        <v-flex xs3 md3>
          <menu-lateral :usuario="usuario"/>
        </v-flex>
        <v-flex xs9 md10>
          <conteudo/>
        </v-flex>
      </v-layout>

      <v-layout v-if="!dados && usuarioLogado " row>
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
import { mapState } from "vuex";
import axios from 'axios'

export default {
  data() {
    return {
      usuario: "",
      usuarioLogado: "",
      avatar: ""
    };
  },
  name: "App",
  components: { areaPesquisa, menuLateral, conteudo, userNotFound },
  computed: {
    dados() {
      return this.$store.state.dadosStarsUser != "";
    },
  },
   mounted() {

    this.usuarioLogado = localStorage.getItem("usuarioLogado");
    if (!this.usuarioLogado) this.$router.push("/login");

    if(this.usuarioLogado)this.$store.dispatch("getDadosStarsUser");
    if(this.usuarioLogado)this.$store.dispatch("getDadosUser");
  },
  beforeUpdate() {
    this.usuarioLogado = localStorage.getItem("usuarioLogado");
    this.usuarioLogado = JSON.parse(this.usuarioLogado);

    if (!this.usuarioLogado) this.$router.push("/login");
    
    if(this.usuarioLogado) {
        this.avatar = this.usuarioLogado.profile.avatar_url;
    }
    this.$store.dispatch("getDadosStarsUser");
   
  },

};
</script>

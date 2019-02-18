<template>
  <v-container grid-list-xl text-xs-center class="fadeIn">
    <v-layout xs7 md3 row wrap>
      <v-flex xs12>
        <div class="superior">
          <v-avatar size="100">
            <img :src="dadosUser.avatar_url?dadosUser.avatar_url:'/static/img/user.jpg'" :alt="dadosUser.name">
          </v-avatar>
          <h1>{{dadosUser.name}}</h1>
          <h2>{{dadosUser.name}}</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="inferior text-sm-left">
          <div>
            <h6 v-if="dadosUser.bio">
              {{ dadosUser.bio}}
            </h6>
          </div>

          <p v-if="dadosUser.name">
            <i class="fab fa-github-square"></i> {{dadosUser.name}}
          </p>
          <p v-if="dadosUser.location">
            <i class="fas fa-map-marker-alt"></i> {{dadosUser.location}}
          </p>
          <p v-if="dadosUser.email">
            <i class="far fa-envelope"></i> {{dadosUser.email}}
          </p>
          <p v-if="dadosUser.url">
            <i class="fas fa-globe"></i> <a class="link" :href="dadosUser.html_url">{{ dadosUser.html_url}}</a>
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props:['usuario'],
  mounted(){
     this.$store.dispatch('getDadosUser')
  },
  computed:{
      ...mapState(['dadosUser'])
  }
};
</script>
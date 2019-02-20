<template>
  <v-container grid-list-xl text-xs-center class="fadeIn">
    <v-layout xs7 md3 row wrap>
      <v-flex xs12>
        <div class="superior">
          <v-avatar size="100">
            <img
              :src="dadosUser.avatarUrl?dadosUser.avatarUrl:'/static/img/user.jpg'"
              :alt="dadosUser.name"
            >
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
            <blockquote><h6 v-if="dadosUser.bio"><i> &ldquo; {{ dadosUser.bio }} &rdquo;</i></h6></blockquote>
          </div>

          <p>
            <i class="fab fa-github-square"></i>
            {{dadosUser.name}}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            {{dadosUser.location}}
          </p>
          <p>
            <i class="far fa-envelope"></i>
            {{dadosUser.email}}
          </p>
          <p >
            <i class="fas fa-globe"></i>
            <a class="link" :href="dadosUser.url">{{ dadosUser.url}}</a>
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["usuario"],
  mounted() {
    this.$store.dispatch("getDadosUser");
    console.log(this.dadosUser);
  },
  computed: {
    ...mapState(["dadosUser"])
  },
  beforeUpdate() {
    console.log("DENTRO BEFORE UDPATEMENU-ALTERAL", this.dadosUser);
  }
};
</script>
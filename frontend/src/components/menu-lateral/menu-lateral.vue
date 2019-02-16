<template>
  <v-container grid-list-xl text-xs-center>
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
  mounted(){
     this.$store.dispatch('getDadosUser')
  },
  computed:{
      ...mapState(['dadosUser'])
  }
};
</script>

<style scoped>
.superior {
  padding: 25px;
  border-radius: 5px 0px 0 0px;
  background-color: #484ea8;
}

.superior h2 {
  font-size: 14px;
  color: white;
  font-weight: 100;
}
.superior h1 {
  font-size: 16px;
  color: white;
  padding-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
}
.inferior {
  color: white;
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 4px;
  font-size: 12px;
  background-color: #5153b8;
  border-radius: 0 0 0px 5px;
}
.inferior h6 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin-bottom: 15px;
}
.container.grid-list-xl .layout .flex {
  padding: 0px;
}

.container {
  margin-top: 45px;
  padding: 12px;
}
.link{
  color: white;
}
</style>

<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout xs7 md3 row wrap>
      <v-flex xs12>
        <div class="superior">
          <v-avatar size="100">
            <img v-if="usuario.avatar_url" :src="usuario.avatar_url" alt="John">
            <img v-else src="https://cdn.vuetifyjs.com/images/john.jpg" alt="">
          </v-avatar>
          <h1>{{ usuario.name}}</h1>
          <h2>{{ usuario.name}}</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="inferior text-sm-left">
          <div>
            <h6 v-if="usuario.bio">
              {{ usuario.bio}}
            </h6>
          </div>

          <p v-if="usuario.name">
            <i class="fab fa-github-square"></i>{{ usuario.name}}
          </p>
          <p v-if="usuario.location">
            <i class="fas fa-map-marker-alt"></i> {{ usuario.location}}
          </p>
          <p v-if="usuario.email">
            <i class="far fa-envelope"></i> {{ usuario.email}}
          </p>
          <p v-if="usuario.url">
            <i class="fas fa-globe"></i> {{ usuario.url}}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      usuario:{}
    }
  },
  mounted(){
     axios.get(`https://api.github.com/users/alessandroprudencio`)
            .then(res=>{
                this.usuario = res.data
               console.log(res)
            }).catch(e=>{
                console.log(error)
            })
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
  padding-left: 20px;
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
</style>

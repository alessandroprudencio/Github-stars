<template>
  <v-layout  align-center justify-center row fill-height>
    <v-flex xs3 md3>
           <h4>
        Github<b>Stars</b>
      </h4>
   
    </v-flex>
    <v-flex xs5 md9 mx-4>
      <v-form ref="form" >
        <v-text-field v-model="name"  append-icon="search" @change="buscarUser" label=" github username... " required> </v-text-field>
      </v-form>
    </v-flex>

    <v-avatar size="60">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </v-avatar>
  </v-layout>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    data(){
        return{
            name:''
        }
    },
   methods:{
       buscarUser(){
        this.$store.dispatch('getDadosStarsUser',this.name)
        this.$store.dispatch('getDadosUser',this.name)
       },
   }
};
</script>

<style scoped>
.h4, h4 {
line-height: normal;
font-weight: 100;
font-size: 36px;
color: #666;
}
b, strong{
color: #484ea8;
font-weight: 420;
}
</style>


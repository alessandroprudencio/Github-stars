<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs3 md3>
      <h4>
        Github
        <b>Stars</b>
      </h4>
    </v-flex>
    <v-flex xs5 md9 mx-4>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name"  @change="buscarUser" label=" github username... " required> </v-text-field>
      </v-form>
    </v-flex>

    <v-avatar size="60">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </v-avatar>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            name:''
        }
    },
   methods:{
       buscarUser(){
        axios.get(`https://api.github.com/users/${this.name}/starred`)
            .then(res=>{
                console.log(res.data[0])
            }).catch(e=>{
                console.log(error)
            })
       }
   }
};
</script>

<style scoped>
h4 {
  line-height: normal;
  font-weight: 100;
  font-size: 36px;
  color: #666;
}
b {
  color: #484ea8;
  font-weight: 420;
}
</style>


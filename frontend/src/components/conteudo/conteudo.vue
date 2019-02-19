<template>
  <v-container grid-list-xl text-xs-center class="scroll-y conteudo fadeIn">
    <v-layout xs7 md3 row wrap>
      <v-flex xs11 class="text-sm-left">

            <v-list 
             three-line>
            <template v-for="(item, index) in dadosStarsUser">
              <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                {{ item.header }}
              </v-subheader>
  
              <v-divider
              
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>
  
              <v-list-tile
              class="grow"

                v-else
                :key="item.title"
                avatar
              >
                <v-list-tile-avatar>
                  <img :src="item.owner.avatar_url">
                </v-list-tile-avatar>
  
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.full_name"></v-list-tile-title>   
                 <v-list-tile-sub-title>  {{ item.description}}</v-list-tile-sub-title>

                  <v-list-tile-sub-title><i class="far fa-star"></i>    {{item.stargazers_count}}</v-list-tile-sub-title>
                </v-list-tile-content>
            
                <v-list-tile-action>
                       <v-btn outline color="indigo">star</v-btn>
                </v-list-tile-action>
              </v-list-tile>
                <v-divider :key="index"></v-divider>            
            </template>
          </v-list>
      </v-flex>
      

        
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
  mounted(){
      this.$store.dispatch('getDadosStarsUser');
    console.log('dentro do conteudo.vue mounted')

  },
  computed:{
      ...mapState(['dadosStarsUser']),    
  },
};
</script>

<style scoped>
.grow:hover
{
        -webkit-transform: scale(0.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
}
</style>

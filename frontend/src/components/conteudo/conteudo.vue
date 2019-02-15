<template>
  <v-container grid-list-xl text-xs-center class="conteudo">
    <v-layout xs7 md3 row wrap>
      <v-flex xs12 class="text-sm-left">

            <v-list three-line>
            <template v-for="(item, index) in items">
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

                  <v-list-tile-sub-title><i class="far fa-star"></i>    {{  item.stargazers_count}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                       <v-btn outline color="indigo">star</v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
data () {
    return {
      items: []
    }
  },
  mounted(){
        axios.get(`https://api.github.com/users/alessandroprudencio/starred`)
            .then(res=>{
                this.items.push(...res.data)
               console.log(res)
            }).catch(e=>{
                console.log(error)
            })
  }

};
</script>

<style scoped>
.conteudo {
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: white;
  height: 100%;
  box-shadow: 2px 2px 8px 3px #aaa9a9;
}
.fa-star:before{
    color: #484ea8;
}
</style>

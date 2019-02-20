<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs3 md3>
      <h4>Github<b>Stars</b></h4>
    </v-flex>
    <v-dialog
      v-model="dialog"
      v-if="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="blue"
        dark
      >
        <v-card-text>
          Carregando...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-flex xs5 md9 mx-4>
      <v-form ref="form">
        <v-text-field
          v-model="name"
          @click:append="buscarUser"
          append-icon="search"
          @change="buscarUser"
          label=" github username... "
          required
        ></v-text-field>
        
      </v-form>
      
    </v-flex>

    <v-avatar size="60">
      <img :src="avatar" alt="John">
    </v-avatar>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  props: ["avatar"],
  data() {
    return {
      name: "",
      dialog: false
    };
  },
  methods: {
    buscarUser() {
      this.dialog = true
      this.$store.dispatch("getDadosStarsUser", this.name)
        .then(()=>this.dialog=false)
      this.$store.dispatch("getDadosUser", this.name)
    },
    async show() {
      try {
        const res = await axios.post("https://api.github.com/graphql?access_token=50f4d6d41f93bf92cf7c7972ba9822961c30a286", {
          query: '{user(login:"alessandroprudencio"){id}}'
        });
        console.log(res.data)
      } catch (e) {
        console.log("err", e);
      }
    }
  },
  mounted() {}
};
</script>


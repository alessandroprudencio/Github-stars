<template>
  <v-container grid-list-xl text-xs-center class="scroll-y conteudo fadeIn">
    <v-layout xs7 md3 row wrap>
      <v-flex xs12 class="text-sm-left">
        <v-list three-line>
          <template v-for="(item, index) in dadosStarsUser">
            <v-list-tile class="grow" :key="item.id" avatar>
              <v-list-tile-avatar>
                <img :src="item.owner.avatarUrl">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.nameWithOwner"></v-list-tile-title>
                <v-list-tile-sub-title>{{ item.description}}</v-list-tile-sub-title>

                <v-list-tile-sub-title>
                  <i class="far fa-star"></i>
                  {{item.stargazers.totalCount}}
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn outline color="indigo" @click="starRepository(item)">star</v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < dadosStarsUser.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getDadosStarsUser");
    this.$store.dispatch("getDadosUser");
  },

  computed: {
    ...mapState(["dadosStarsUser"]),
    ...mapState(["dadosUser"])
  },
  methods: {
    starRepository(item) {
      let user = JSON.parse(localStorage.getItem("usuarioLogado"))

      if (this.dadosUser.login == user.username) {
        this.$store.dispatch("setRemoveStar", item);
      } else {
        this.$store.dispatch("addStar", item);
      }
    }
  }
};
</script>


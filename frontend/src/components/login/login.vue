<template>
  <div id="login">
    <v-container>
      <v-layout align-center justify-center xs7 md3 row>
        <v-flex grid-list-xl text-xs-center xs6>
          <h4>
            Github
            <b>Stars</b>
          </h4>
          <p>Faça login com o Git Hub</p>

          <v-btn
             large
            :loading="loading3"
            :disabled="loading3"
            color="indigo"
            class="white--text"
            @click="loader = 'loading3'"
          >
          <i class="fab fa-github"></i>
            <v-icon left dark></v-icon>          
          GITHUB
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
          loader: null,

            loading3: false,

  }),

  mounted() {},

  methods: {
    submit() {
      this.$validator.validateAll();
    }
  },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
     }
};
</script>

<style scoped>
.h4,
h4 {
  line-height: normal;
  font-weight: 100;
  font-size: 36px;
  color: #666;
}
b,
strong {
  color: #484ea8;
  font-weight: 420;
}
</style>

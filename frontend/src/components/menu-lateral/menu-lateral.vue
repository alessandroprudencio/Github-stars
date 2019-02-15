<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout xs7 md3 row wrap>
      <v-flex xs12>
        <div class="superior">
          <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
          <h1>Nome do xupim</h1>
          <h2>Nome do xuh2im</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="inferior text-sm-left">
          <div>
            <h6>
              Maker . Full-Time
              Open-Sourcerer . Into Swift and Node.js
            </h6>
          </div>

          <p>
            <i class="fab fa-github-square"></i> Alessandro Assunsão faria
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Campo Grande, MS
          </p>
          <p>
            <i class="far fa-envelope"></i> alessandroconectado@gmail.com
          </p>
          <p>
            <i class="fas fa-globe"></i> www.xupim.com.br
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
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

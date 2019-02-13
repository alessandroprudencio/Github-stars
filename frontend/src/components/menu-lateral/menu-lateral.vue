<template id="menu-lateral" >

  <v-container grid-list-xl text-xs-center>
    <v-layout  xs7 md3 row wrap>
      <v-flex xs12 >

      <div class="superior">       
          <v-avatar size="100"  >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"          
            >
          </v-avatar>
          <h1> Nome do xupim</h1>
          <h2> Nome do xuh2im</h2>
      </div>
      </v-flex>
    </v-layout>
    <v-layout  row wrap>
      <v-flex xs12 >
      <div class="inferior">       
       
          <i class="fab fa-github-square"></i><p>Nome</p>
          <p>Ciadade</p>
          <p>Email</p>
          <p>Site</p>

          <div>
              alesandro@gmail.com
          </div>
      </div>
      </v-flex> 
    </v-layout>
     </v-container>


</template>

<script>
export default {

}
</script>

<style scoped>
.superior{
  padding: 30px;
  border-radius: 5px 5px 0 0px;
  background-color:#484EA8;
}

.superior h2{
  font-size: 14px;
  color: white;
  font-weight: 100;
}
.superior h1{
  font-size: 16px;
  color: white;
  padding-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
}
.inferior{
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 12px;
  background-color:#5153B8;
  border-radius: 0 0 5px 5px;
}
.container.grid-list-xl .layout .flex {
    padding: 0;
  }
</style>

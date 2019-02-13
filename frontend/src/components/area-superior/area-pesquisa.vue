<template>

        <v-layout align-center justify-center row fill-height>
          <v-flex xs3 md3>
               <h4>Github<b>Stars</b></h4>
          
          </v-flex>
          <v-flex xs5 md9 mx-4>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-text-field
                            v-model="name"
                            :counter="10"
                            :rules="nameRules"
                            label=" github username... "
                            required
                            ></v-text-field>

                    </v-form>      
          </v-flex>

        </v-layout>


                 
  

</template>

<script>
export default {

}
</script>

<style scoped>
h4{

font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
line-height: normal;
font-size: 36px;
}
b{
    color: #484EA8;
    font-weight: 500;
}
</style>


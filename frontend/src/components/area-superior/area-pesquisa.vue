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
                            :rules="nameRules"
                            label=" github username... "
                            required
            append-icon="place"

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
line-height: normal;
font-weight: 100;
font-size: 36px;
color:#666;
}
b{
    color: #484EA8;
    font-weight: 420;
}

</style>


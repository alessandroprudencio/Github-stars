import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state:{
        dadosUser:[],
        dadosStarsUser:[]
    },
    mutations:{ 
        setDadosUser (state,dadosUser){
            state.dadosUser = dadosUser
        },
        setDadosStarsUser(state,dadosStarsUser){
            state.dadosStarsUser = dadosStarsUser
        }
    },
    actions:{
         getDadosUser({commit}, payload){
             if(payload){
                axios.get(`https://api.github.com/users/${payload}`)
                .then(res =>{
                    const dadosUser = res.data
                    let nome = dadosUser.name.split(" ")
                    let primeiroNome=nome[0]
                    let ultimoNome=nome.slice(-1)[0]
                    dadosUser.name = primeiroNome + ' ' + ultimoNome
                    commit('setDadosUser',dadosUser)
                })
                .catch(e =>{
                    console.log(e)
                })
             }
        },
        getDadosStarsUser({commit},payload){
            if(payload){
                axios.get(`https://api.github.com/users/${payload}/starred`)
                .then(res=>{
                    const dadosStarsUser = res.data
                    commit('setDadosStarsUser',dadosStarsUser)
                })
                .catch(e=>{
                    console.log(e)
                })
            }
        } 

    }
})
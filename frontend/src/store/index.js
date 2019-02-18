import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        dadosUser: [],
        dadosStarsUser: []
    },
    mutations: {
        setDadosUser(state, dadosUser) {
            state.dadosUser = dadosUser
        },
        setDadosStarsUser(state, dadosStarsUser) {
            state.dadosStarsUser = dadosStarsUser
        }
    },
    actions: {
        getDadosUser({ commit }, payload) {
            let usuarioLogado = localStorage.getItem("usuarioLogado");
            usuarioLogado = JSON.parse(usuarioLogado);

            let token = localStorage.getItem("oAuthAccess");

            let parametros = ''

            if (payload) parametros = payload
            else parametros = usuarioLogado.username

            axios.get(`https://api.github.com/users/${parametros}?access_token=${token}`)
                .then(res => {
                    const dadosUser = res.data
                    if (dadosUser.name) {
                        var nome = dadosUser.name.split(" ")
                        var primeiroNome = nome[0]
                        var ultimoNome = nome.slice(-1)[0]
                    }

                    dadosUser.name = primeiroNome + ' ' + ultimoNome
                    commit('setDadosUser', dadosUser)
                })
                .catch(e => {
                    console.log(e)
                })

        },
        getDadosStarsUser({ commit }, payload) {
            let usuarioLogado = localStorage.getItem("usuarioLogado");
            usuarioLogado = JSON.parse(usuarioLogado);

            let token = localStorage.getItem("oAuthAccess");

            let parametros = ''

            if (payload) parametros = payload
            else parametros = usuarioLogado.username

            axios.get(`https://api.github.com/users/${parametros}/starred?access_token=${token}`)
                .then(res => {
                    const dadosStarsUser = res.data
                    commit('setDadosStarsUser', dadosStarsUser)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        setStar({ commit }, payload) {
            axios.put('https://github.com/user/starred/surmon-china/vue-awesome-swiper?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiYmQyOGVkYzNkMTBiOTI5ZjU3NWEyY2E2ODU0OWZjYTZkODg5OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ2l0aHViLXN0YXJzLTM3NmRiIiwibmFtZSI6IkFsZXNzYW5kcm8gUHJ1ZGVuY2lvIGRhIENydXogU2lsdmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8zOTQ3MzMwNT92PTQiLCJhdWQiOiJnaXRodWItc3RhcnMtMzc2ZGIiLCJhdXRoX3RpbWUiOjE1NTA0NTExMDMsInVzZXJfaWQiOiJ5TmFmb0dXRWwxUnBOTlZuaGJyRzhWeUZydTEzIiwic3ViIjoieU5hZm9HV0VsMVJwTk5Wbmhickc4VnlGcnUxMyIsImlhdCI6MTU1MDQ1MTEwMywiZXhwIjoxNTUwNDU0NzAzLCJlbWFpbCI6ImFsZXNzYW5kcm9jb25lY3RhZG9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImdpdGh1Yi5jb20iOlsiMzk0NzMzMDUiXSwiZW1haWwiOlsiYWxlc3NhbmRyb2NvbmVjdGFkb0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn19.TSI8kT5DqmhdulQheHelQN_AubO6m_3AsdTwpPzqmEhRi7uCezF7Qv1PlC12eRdt0r-OVfzT4IHr1TGxAYPNFoYwz42Lfsv-QNFaaRzJmcb7CX4V2shxxaha8Sj_cpyVbZaXJ0REXKnxts45gRMauMHBtu_04cJLDiGWfxm8BUrvbia7GeeyJuXP4OvkZD_VJLQ4SYQHGL-Jmxlz0rBhkeK_YUlvfBnTEKMc2nSMzZbcd-1fOC4J3QHe2GkX0la1fAMuJCXDHy5VDLeTERNjtP_ZzePS4lCNHouhwV15vyaTplZrvUmFATrq43iyqj5pfmOSUuUWZoPy8jqGOqgyxQ')
                .then(res => {
                    const dadosStarsUser = res.data
                    commit('setDadosStarsUser', dadosStarsUser)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        setLogin(){

            let provider = new firebase.auth.GithubAuthProvider();

            firebase
              .auth()
              .signInWithPopup(provider)
              .then(result => {
                var token = result.credential.accessToken;

                var user = result.additionalUserInfo;
                localStorage.setItem("usuarioLogado", JSON.stringify(user));
                localStorage.setItem("oAuthAccess", token);

                router.push({name:'/'})

              })
              .catch(error => {
                console.log(error)
              });
        }

    }
})
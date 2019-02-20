import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'
import { DataStarsQuery } from '@/querys/DataStarsQuery'
import { DataUserQuery } from '@/querys/DataUserQuery'

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
        async getDadosUser({ commit }, payload) {
            let usuarioLogado = localStorage.getItem("usuarioLogado");
            usuarioLogado = JSON.parse(usuarioLogado);

            let token = localStorage.getItem("oAuthAccess");

            let parametros = ''

            if (payload) parametros = payload
            else if (usuarioLogado) parametros = usuarioLogado.username

            await axios.post(`https://api.github.com/graphql?access_token=${token}`, {
                query: DataUserQuery(parametros)
            })
                .then(res => {
                    const dadosUser = res.data.data.user
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
        async getDadosStarsUser({ commit }, payload) {
            let usuarioLogado = localStorage.getItem("usuarioLogado");
            usuarioLogado = JSON.parse(usuarioLogado);

            let token = localStorage.getItem("oAuthAccess");

            let parametros = ''

            if (payload) parametros = payload
            if (usuarioLogado && !payload) parametros = usuarioLogado.username

            await axios.post(`https://api.github.com/graphql?access_token=${token}`, {
                query: DataStarsQuery(parametros)
            })
                .then(res => {
                    const dadosStarsUser = res.data.data.user.starredRepositories.nodes
                    commit('setDadosStarsUser', dadosStarsUser)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        setLogin() {

            let provider = new firebase.auth.GithubAuthProvider();

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    var token = result.credential.accessToken;

                    var user = result.additionalUserInfo;
                    localStorage.setItem("usuarioLogado", JSON.stringify(user));
                    localStorage.setItem("oAuthAccess", token);

                    router.push({ name: '/' })

                })
                .catch(error => {
                    console.log(error)
                });
        }

    }
})
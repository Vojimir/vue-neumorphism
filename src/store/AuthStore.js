import { authService } from './../services/AuthService'

export const AuthStore = {
    state: {
       
    },
    mutations: {
       
    },
    actions : {
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {  
            authService.login({ 
                usernameMail:credentials.usernameMail,
                password: credentials.password,
            })
                .then(response => {
                    const token = response.data.access_token;
                    
                    localStorage.setItem('access_token', token)
                    context.commit('retriveToken', token)
                    resolve(response)
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },
        fetchUser(context, id) {
            return authService.get(id)
                .then(
                    response => { context.commit('setUser', response.data) }
                )
        },
        logout(context) {
            context.commit('setToken', null)
            // localStorage.setItem('token', null) drugo resenje
            localStorage.clear();
            // localStorage.removeItem('token'),
            // localStorage.removeItem('user',null)
        }
    },
    getters: {
        isUserAuthenticated(state) {
            return !!state.token
        },
        errors(state) {
            return state.errors
        },
        user(state) {
            return JSON.parse(state.user)
        }
    }
    
}
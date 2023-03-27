<template>
    <div>
      <header-home :notificacoes="notificacoes" @click="logout()" ></header-home>
        <h1>Olá {{ user }}</h1>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import app from "../../firebase"
import HeaderHome from './header/HeaderHome'

const auth = getAuth(app)


export default {
  components: {
      HeaderHome,
      
    },
data() {
    return{
        user: null,
        error : null,
        notificacoes: [
              { id: 1, mensagem: "Notificação 12" },
              { id: 2, mensagem: "Notificação 2" },
              { id: 3, mensagem: "Notificação 3" }
            ],
    }
},
created() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // usuário está logado
          this.user = user.email
        } else {
          this.user = null
        }
      })
    },
methods: {
    register(){
        
    },

    logout(){
        signOut(auth).then(() => {
            alert("Você deslogou")
            this.$router.push('/'); 
        }).catch((error) => {
          alert("Erro ao deslogar", error)
        })
    }
}
}
</script>

<style>

</style>
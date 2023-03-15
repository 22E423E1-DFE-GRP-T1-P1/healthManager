<template>
    <div>
        <h1>Olá {{ user }}</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import app from "../../firebase"

const auth = getAuth(app)


export default {

data() {
    return{
        user: null,
        error : null
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
<template>
<div id="container">
    <h1 style="text-align: center; font-weight: bold;">Registrar</h1>
    <h5>Cadastre um médico em sua clínica</h5>
    <div class="form-container">
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="area">Escolha a área de atuação:</label>
                <select name="area" id="area" v-model="selectedArea">
                <option value="" disabled selected>Selecione uma opção</option>
                <option v-for="area in areas" :value="area" :key="area.id">{{ area }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="name" id="name" v-model="nome" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" v-model="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" name="password" required>
            </div>
            <div class="form-group">
                <input type="submit" id="btn" value="Registrar">
            </div>
           
        </form>
    </div>
</div>
</template>

<script>
import app from "../../firebase"
import { useToast } from 'vue-toastification';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const toast = useToast();
const auth = getAuth(app);
const db = getFirestore(app);

export default {
name: 'RegisterPage',
props: {
    msg: String
},
data() {
    return{
      selectedArea: "",
      areas: [
        'Cardiologia',
        'Dermatologia',
        'Endocrinologia',
        'Ginecologia',
        'Neurologia',
        'Oftalmologia',
        'Ortopedia',
        'Pediatria',
        'Psiquiatria',
        'Urologia'
      ],
      nome: "",
      email: "",
      password: ""
    }
},
methods: {
    register(){
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        setDoc(doc(db, "Users", this.email), {
          name: this.nome,
          espec: this.selectedArea,
          email: this.email
        });
        toast.success('Bem-vindo, ' + this.nome);
        this.$router.push('/DashBoard')

      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(error.message);
        console.log(errorMessage);
      })
    }
}
}
</script>

<style>
        .form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  color: white;
}

select{
    padding: 10px;
    color: #025d84;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #20A0D8;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
 
}

.form-group #btn{
    background-color: #333;
    border: 0;
  color: white;
}

.form-group-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.form-group-links a {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.form-group-links span {
  margin: 0 10px;
}
</style>
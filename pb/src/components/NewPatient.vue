<template>
  <div id="container">
    <h1 style="text-align: center; font-weight: bold;">Registrar</h1>
    <h5>Cadastre um pasciente em sua clínica</h5>
    <div class="form-container">
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="name" id="name" v-model="nome" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" v-model="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="idade">Idade:</label>
                <input type="number" id="idade" v-model="idade" name="idade" required>
            </div>
            <div class="form-group">
                <label for="sexo">Escolha o sexo:</label>
                <select name="sexo" id="sexo" v-model="selectedSexo">
                <option value="" disabled selected>Selecione uma opção</option>
                <option v-for="sexo in sexos" :value="sexo" :key="sexo.id">{{ sexo }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="convenio">Convenio:</label>
                <input type="text" id="convenio" v-model="convenio" name="convenio" required>
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
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const auth = getAuth(app);
const db = getFirestore(app);

export default {
  name: "NewPatient",
  data() {
    return {
      sexos: ["Homem", "Mulher"]
    }
  },
  methods: {
    registerPatient() {
      setDoc(doc(db, `Users/${auth.currentUser.email}/Patients`), {
        name: "Nome",
        email: "Email",
        idade: 0,
        sex: "Afeminado",
        convenio: "Unimed"
      })
    }
  }
}
</script>

<style>

</style>
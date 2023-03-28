<template>
  <div id="container">
    <h1 style="text-align: center; font-weight: bold">Registrar</h1>
    <h5>Cadastre um paciente em sua clínica</h5>
    <div class="form-container">
      <form @submit.prevent="registerPatient">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="name" id="name" v-model="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            v-model="idade"
            name="idade"
            required
          />
        </div>
        <div class="form-group">
          <label for="sexo">Escolha o sexo:</label>
          <select name="sexo" id="sexo" v-model="selectedSexo">
            <option value="" disabled selected>Selecione uma opção</option>
            <option v-for="sexo in sexos" :value="sexo" :key="sexo.id">
              {{ sexo }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="convenio">Convenio:</label>
          <input
            type="text"
            id="convenio"
            v-model="convenio"
            name="convenio"
            required
          />
        </div>
        <div class="form-group">
          <input type="submit" id="btn" value="Registrar" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import app from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { doc, collection, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useToast } from "vue-toastification";
const toast = useToast();
const auth = getAuth(app);
const db = getFirestore(app);

export default {
  name: "NewPatient",
  data() {
    return {
      sexos: ["Homem", "Mulher"],
      name: "",
      email: "",
      idade: 0,
      selectedSexo: "",
      convenio: "",
    };
  },
  methods: {
    registerPatient() {
      const newPatient = {
        name: this.name,
        email: this.email,
        idade: this.idade,
        sex: this.selectedSexo,
        convenio: this.convenio,
      };

      const parentDocRef = doc(db, "Users", auth.currentUser.email);

      const subCollectionRef = collection(parentDocRef, "Patients");

      const docRef = doc(subCollectionRef, this.email);

      setDoc(docRef, newPatient)
        .then(() => {
          // Documento criado com sucesso
          toast.success("Paciente cadastrado com sucesso!");
          this.$router.push('/DashBoard'); 
          // Exibir mensagem de sucesso ou redirecionar o usuário
        })
        .catch((error) => {
          // Ocorreu um erro ao criar o documento
          toast.error(error);
          // Exibir mensagem de erro para o usuário
        });
    },
  },
};
</script>

<style>
</style>
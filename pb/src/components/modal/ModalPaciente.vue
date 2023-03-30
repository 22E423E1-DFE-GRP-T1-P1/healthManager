<template>
  <div class="modal-overlay">
    <div id="container">
      <div id="modal">
        <!---
        <div class="modal-content">
          <h3>Detalhes</h3>
          <p>Nome: {{ pacienteSelecionado.nome }}</p>
          <p>Idade {{ pacienteSelecionado.idade }}</p>
          <p>Sexo {{ pacienteSelecionado.sexo }}</p>
          <p>Convênio {{ pacienteSelecionado.convenio }}</p>
        </div>
          --->
        <div class="modal-content">
          <h3>Remédios</h3>
          <div>
            <label for="filtroNomeInput">Nome:</label>
            <select id="filtroNomeInput" v-model="nomeSelecionado">
              <option value="">Remédios</option>
              <option
                v-for="nome in remedios.reduce(
                  (acc, rem) =>
                    acc.includes(rem.nome) ? acc : [...acc, rem.nome],
                  []
                )"
                :key="nome.id"
                :value="nome"
              >
                {{ nome }}
              </option></select
            ><br />
            <label for="filtroFabricanteInput">Fabricante:</label>
            <select id="filtroFabricanteInput" v-model="fabricanteSelecionado">
              <option value="">Fabricante</option>
              <option
                v-for="fabricante in remedios.reduce(
                  (acc, rem) =>
                    acc.includes(rem.fabricante)
                      ? acc
                      : [...acc, rem.fabricante],
                  []
                )"
                :key="fabricante.id"
                :value="fabricante"
              >
                {{ fabricante }}
              </option>
            </select>
          </div>

          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Marca</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(remedio, index) in remediosPaciente" :key="index">
                  <td>{{ remedio.nameRemedio }}</td>
                  <td>{{ remedio.nomeFabricante }}</td>
                </tr>
              </tbody>
            </table>
            <button @click="adicionarRemedio" id="filterButton">
              Adicionar
            </button>
          </div>
        </div>

        <div class="modal-content">
          <h3>Exames</h3>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Exame</th>
                  <th scope="col">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(exame, index) in exames" :key="index">
                  <td>{{ exame.nameExame }}</td>
                  <td>{{ exame.dataExame }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <input
              id="filtroNomeInput"
              type="text"
              v-model="novoExame.nome"
              placeholder="Nome do exame"
            />

            <input
              id="filtroNomeInput"
              type="date"
              v-model="novoExame.data"
              placeholder="Data Exame"
            />
            <br />
            <button @click="adicionarExame" id="filterButton">Adicionar</button>
          </div>
        </div>

        <div id="botoes">
          <button id="filterButton" @click="$emit('close')">Fechar</button>
          <button id="filterButton" @click="$emit('delete')">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
import api from "./api";
import app from "../../../firebase";
import {
  doc,
  collection,
  getFirestore,
  setDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
const db = getFirestore(app);

export default {
  props: {
    pacienteSelecionado: Object,
  },
  async created() {
    try {
      const response = await api.get("/remedios");
      this.remedios = response.data;

      for (const remedio of this.remedios) {
        if (!this.nomesRemedios.includes(remedio.nome)) {
          this.nomesRemedios.push(remedio.nome);
        }
        if (!this.fabricantesRemedios.includes(remedio.fabricante)) {
          this.fabricantesRemedios.push(remedio.fabricante);
        }
      }
    } catch (error) {
      console.error(error);
    }

    const parentDocRef = doc(db, "Users", auth.currentUser.email);
    const patientsCollectionRef = collection(parentDocRef, "Patients");
    const patientDocRef = doc(
      patientsCollectionRef,
      this.pacienteSelecionado.email
    );
    // puxando exames
    const examesPatientsRef = collection(patientDocRef, "Exames");

    const qE = query(examesPatientsRef);

    onSnapshot(qE, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.exames.push(doc.data());
      });
    });

    // puxando remediosPatiente
    const remediosPatientsRef = collection(patientDocRef, "Remedios");

    const qR = query(remediosPatientsRef);

    onSnapshot(qR, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.remediosPaciente.push(doc.data());
      });
    });

    console.log(this.remediosPaciente);
  },
  data() {
    return {
      teste: "",
      remedios: [],
      remediosPaciente: [],
      exames: [],
      nomesRemedios: [],
      fabricantesRemedios: [],
      nomeSelecionado: "",
      fabricanteSelecionado: "",

      novoRemedio: {
        nome: "",
        marca: "",
      },
      novoExame: {
        nome: "",
        data: "",
      },
    };
  },
  methods: {
    adicionarRemedio() {
      const newRemedio = {
        nameRemedio: this.nomeSelecionado,
        nomeFabricante: this.fabricanteSelecionado,
      };

      const parentDocRef = doc(db, "Users", auth.currentUser.email);
      const patientsCollectionRef = collection(parentDocRef, "Patients");
      const patientDocRef = doc(
        patientsCollectionRef,
        this.pacienteSelecionado.email
      );
      const examesPatientsRef = collection(patientDocRef, "Remedios");
      const docRef = doc(examesPatientsRef, this.nomeSelecionado);

      setDoc(docRef, newRemedio)
        .then((res) => {
          console.log(res);
          toast.success("Remédio Adicionado!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Erro ao adicionar remédio");
        });
    },
    adicionarExame() {
      const newExame = {
        nameExame: this.novoExame.nome,
        dataExame: this.novoExame.data,
      };

      const parentDocRef = doc(db, "Users", auth.currentUser.email);
      const patientsCollectionRef = collection(parentDocRef, "Patients");
      const patientDocRef = doc(
        patientsCollectionRef,
        this.pacienteSelecionado.email
      );
      const examesPatientsRef = collection(patientDocRef, "Exames");
      const docRef = doc(examesPatientsRef, this.novoExame.nome);

      try {
        setDoc(docRef, newExame).then((res) => {
          console.log(res);
          toast.success("Exame Adicionado!");
        });
      } catch (error) {
        toast.success("Erro ao adicionar exame");
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

#modal {
  background-color: white;
  padding: 25px;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  color: black;
}

@media (max-width: 1000px) {
  #modal {
    width: 300px;
  }
}

#botoes {
}
</style>
<template>
  <div>
    <header-home
      :notificacoes="notificacoes"
      :click-logout="logout"
    ></header-home>
    
    <div class="table-responsive">
      <div id="listaPacientes">
      <h4>Lista de pacientes</h4>
      <div id="filtroNome">
      <label style="padding: 10px" for="filtroNome"></label>
      <input
        type="text"
        id="filtroNomeInput"
        placeholder="Digite um nome"
        v-model="filtroNome"
      />
    </div>
    </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="col-sm-2">Nome</th>
            <!--Esconde em mobile-->
            <th class="col-sm-2">Idade</th>

            <th class="d-none d-sm-table-cell col-sm-2">Sexo</th>
            <!--Esconde em mobile-->
            <th class="col-sm-2">Convênio</th>
            <th class="col-sm-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(paciente, idpaciente) in filtrarPacientes()"
            :key="idpaciente"
          >
            <td class="col-sm-2">{{ paciente.name }}</td>
            <!--Esconde em mobile-->
            <td class="col-sm-2">{{ paciente.idade }}</td>
            <!--Esconde em mobile-->
            <td class="d-none d-sm-table-cell col-sm-2">{{ paciente.sex }}</td>

            <td style="font-weight: bold" class="col-sm-2">
              {{ paciente.convenio }}
            </td>
            <td class="col-sm-2">
              <button id="btndetalhes" @click="verDetalhes(idpaciente)">
                Ver Detalhes
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
    </div>
    <div v-if="pacienteSelecionado !== null">
      <modal-paciente
        v-show="mostrarModal"
        :pacienteSelecionado="pacienteSelecionado"
        @close="mostrarModal = false"
      ></modal-paciente>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase";
import HeaderHome from "./header/HeaderHome";
import ModalPaciente from "./modal/ModalPaciente.vue";

const auth = getAuth(app);

export default {
  components: {
    HeaderHome,
    ModalPaciente,
  },
  data() {
    return {
      mostrarModal: false,
      pacienteSelecionado: null,
      user: null,
      error: null,
      filtroNome: "",
      notificacoes: [
        { id: 1, mensagem: "Notificação 12" },
        { id: 2, mensagem: "Notificação 2" },
        { id: 3, mensagem: "Notificação 3" },
      ],
      pacientes: []
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // usuário está logado
        this.user = user.email;
        this.getPatients();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    filtrarPacientes() {
      return this.pacientes.filter((p) =>
        p.name.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    },

    verDetalhes(index) {
      this.mostrarModal = true;
      this.pacienteSelecionado = this.pacientes[index];
    },

    logout() {
      signOut(auth)
        .then(() => {
          alert("Você deslogou");
          this.$router.push("/");
        })
        .catch((error) => {
          alert("Erro ao deslogar", error);
        });
    },
    
    getPatients() {
      this.$store.commit("getPatients");
      this.pacientes = this.$store.state.patients
    }
  },
};
</script>

<style>
#btndetalhes {
  background-color: transparent;
  color: #38b6ff;
  border: 1px solid #38b6ff;
  padding: 5px;
  border-radius: 20px;
}

#btndetalhes:hover {
  background-color: transparent;
  color: #0069a7;
  border: 1px solid #0069a7;
  padding: 5px;
  border-radius: 20px;
}

#listaPacientes{
  padding: 20px;
  background-color: #38B6FF;
  margin-top: 40px;
  text-align: center;
}

#listaPacientes h4{
  color: white;
  text-align: center;
}

#filtroNomeInput{
  padding: 10px;
  border: 1px solid #0069a7;
  border-radius: 20px
}
</style>
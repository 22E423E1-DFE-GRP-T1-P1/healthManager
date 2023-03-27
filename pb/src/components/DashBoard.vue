<template>
    <div>
      <header-home :notificacoes="notificacoes" :click-logout="logout" ></header-home>
      <h1>Olá {{ user }}</h1>
      <div class="table-responsive">
        <table class="table table-striped">
      <thead>
        <tr>
          <th class=" col-sm-2">Nome</th> <!--Esconde em mobile-->
          <th class="  col-sm-2">Idade</th>

          <th class="d-none d-sm-table-cell col-sm-2">Sexo</th> <!--Esconde em mobile-->
          <th class="col-sm-2 ">Convênio</th> 
          <th class="col-sm-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paciente, idpaciente) in pacientes" :key="idpaciente"  >
          <td class=" col-sm-2">{{ paciente.nome }}</td> <!--Esconde em mobile-->
          <td class=" col-sm-2">{{ paciente.idade }}</td> <!--Esconde em mobile-->
          <td class="d-none d-sm-table-cell  col-sm-2">{{ paciente.sexo }}</td>

          <td style="font-weight:bold" class="col-sm-2">{{ paciente.convenio }}</td>
          <td class="col-sm-2"><button id="btndetalhes" @click="verDetalhes(idpaciente)">Ver Detalhes</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div  v-if="pacienteSelecionado !== null">
    <modal-paciente v-show="mostrarModal"
        :pacienteSelecionado="pacienteSelecionado"
        @close="mostrarModal = false"
      ></modal-paciente>
  </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import app from "../../firebase"
import HeaderHome from './header/HeaderHome'
import ModalPaciente from "./modal/ModalPaciente.vue";


const auth = getAuth(app)


export default {
  components: {
      HeaderHome,
      ModalPaciente
    },
data() {
    return{
      mostrarModal: false,
      pacienteSelecionado: null,
        user: null,
        error : null,
        notificacoes: [
              { id: 1, mensagem: "Notificação 12" },
              { id: 2, mensagem: "Notificação 2" },
              { id: 3, mensagem: "Notificação 3" }
            ],
            pacientes: [
        {
          id: 1,
          nome: "Elon Musk",
          idade: "99",
          sexo: "Masculino",
          convenio: "Aprovada"
        },
        {
          id: 2,
          nome: "Bill Gates",
          idade: "49",
          sexo: "Masculino",
          convenio: "Unimed"
        },
      ]
            
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

    verDetalhes(index) {
        this.mostrarModal = true;
        this.pacienteSelecionado = this.pacientes[index];
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
#btndetalhes{
  background-color: transparent;
  color: #38b6ff;
  border: 1px solid #38b6ff;
  padding: 5px;
  border-radius: 20px
}

#btndetalhes:hover{
  background-color: transparent;
  color: #0069a7;
  border: 1px solid #0069a7;
  padding: 5px;
  border-radius: 20px
}
</style>
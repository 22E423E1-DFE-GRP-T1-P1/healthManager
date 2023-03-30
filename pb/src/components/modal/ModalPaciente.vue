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
      <option v-for="nome in remedios.reduce((acc, rem) => acc.includes(rem.nome) ? acc : [...acc, rem.nome], [])" :key="nome.id" :value="nome">{{ nome }}</option>
    </select><br>
    <label for="filtroFabricanteInput">Fabricante:</label>
    <select id="filtroFabricanteInput" v-model="fabricanteSelecionado">
      <option value="">Fabricante</option>
      <option  v-for="fabricante in remedios.reduce((acc, rem) => acc.includes(rem.fabricante) ? acc : [...acc, rem.fabricante], [])"  :key="fabricante.id" :value="fabricante">{{ fabricante }}</option>
    </select>
  </div>

  <!----
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Marca</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(remedio, index) in remedios" :key="index">
                  <td>{{ remedio.nome }}</td>
                  <td>{{ remedio.marca }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          ---->
        </div>

        <div class="modal-content">
          <h3>Exames</h3>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr v-for="(exame, idexame) in exames" :key="idexame">
                  <td class="col-sm-2">{{ exame.nome }}</td>
                  <td class="col-sm-2">{{ exame.data }}</td>
                  <td class="col-sm-2"></td>
                </tr>
              </thead>
            </table>
          </div>
          <div>
            <input
              id="filtroNomeInput"
              type="text"
              v-model="novoExame.nome"
              placeholder="Nome do remédio"
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
import api from "./api";

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
  },
  data() {
    return {
      teste: '',
      remedios: [],
      exames: [
        {
          id: 1,
          nome: "Exame 1",
          data: "01/01/2021",
        },
        {
          id: 2,
          nome: "Exame 2",
          data: "02/02/2021",
        },
      ],
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
      if (this.novoRemedio.nome && this.novoRemedio.marca) {
        const novoId = this.remedios.length + 1;
        this.remedios.push({
          id: novoId,
          nome: this.novoRemedio.nome,
          marca: this.novoRemedio.marca,
        });
        this.novoRemedio.nome = "";
        this.novoRemedio.marca = "";
      }
    },
    adicionarExame() {
      if (this.novoExame.nome && this.novoExame.data) {
        const novoId = this.exames.length + 1;
        this.exames.push({
          id: novoId,
          nome: this.novoExame.nome,
          data: this.novoExame.data,
        });
        this.novoExame.nome = "";
        this.novoExame.data = "";
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
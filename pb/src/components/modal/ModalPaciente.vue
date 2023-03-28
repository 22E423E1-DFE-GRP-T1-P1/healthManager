<template>
  <div class="modal-overlay">
    <div id="container">
      <div id="modal">
        <div class="modal-content">
          <h3>Detalhes</h3>
          <p>Nome: {{ pacienteSelecionado.nome }}</p>
          <p>Idade {{ pacienteSelecionado.idade }}</p>
          <p>Sexo {{ pacienteSelecionado.sexo }}</p>
          <p>Convênio {{ pacienteSelecionado.convenio }}</p>
        </div>

        <div class="modal-content">
          <h3>Remédios</h3>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr v-for="(remedio, idremedio) in remedios" :key="idremedio">
                  <td class="col-sm-2">{{ remedio.nome }}</td>
                  <td class="col-sm-2">{{ remedio.marca }}</td>
                  <td class="col-sm-2"></td>
                </tr>
              </thead>
            </table>
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
export default {
  props: {
    pacienteSelecionado: Object,
  },
  data() {
    return {
      remedios: [
        {
          id: 1,
          nome: "Elon Musk",
          marca: "99",
        },
        {
          id: 2,
          nome: "Bill Gates",
          marca: "49",
        },
      ],
    };
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
  width: 300px;
  color: black;
}

#botoes {
}
</style>
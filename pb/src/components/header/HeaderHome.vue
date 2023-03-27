<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">
       <img src="@/assets/logo2.png" alt="Logo"  class="d-inline-block align-text-top">
     </a>
     
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle d-none d-sm-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="bi bi-bell-fill text-warning"></i>
             </a>
             <a id="corTexto" class="nav-link d-sm-none" href="#">
               Notificações
             </a>
             <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
               <li v-for="notificacao in notificacoes" :key="notificacao.id"><a class="dropdown-item" href="#">{{notificacao.mensagem}}</a></li> 
              
             </ul>
           </li>
           
         <li class="nav-item">
           <router-link class=""  :to="{ name: ''}">
           <a id="corTexto" class="nav-link" href="#">
             <i class="bi bi-person-fill text-warning"></i>
              Cadastrar Paciente  
           </a>
           </router-link>
         </li>
         <li v-if="tipo === 'Gestor' " class="nav-item">
           <router-link class=""  :to="{ name: ''}">
           <a id="corTexto" class="nav-link" href="#">
             <i class="bi bi-person-fill text-warning"></i>
              Opções 
           </a>
           </router-link>
         </li>
         <li class="nav-item">
           <a id="corTexto" class="nav-link" href="#" @click="logout" >
             <i class="bi bi-box-arrow-right text-warning"></i>
             Sair
           </a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </template>
 
 <script>
 import 'bootstrap-icons/font/bootstrap-icons.css';
 
 export default {
   props: {
     notificacoes: {
       type: Array,
       required: true,
       
     },
     clickLogout: Function

   },
 
   created(){
        
   },
   
   data(){
     return{
      tipo: null
     }
   },
   methods: {
    logout() {
        this.clickLogout();
    }
  }
 };
 </script>
 
 
 <style scoped>
 a{
   text-decoration: none;
   
 }

 #corTexto{
    color: rgb(255, 255, 255);
 }
 
 .bi{
   font-size: 23px;
 }

 .bg-primary{
    background-color: #38B6FF !important ;
 }

 .text-warning{
    color: rgb(255, 255, 255) !important
 }
 
 img{
   width: 80%;
 }
 </style>
 
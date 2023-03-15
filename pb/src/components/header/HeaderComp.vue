<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
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
             <a class="nav-link d-sm-none" href="#">
               Notificações
             </a>
           </li>
         <li class="nav-item">
           <router-link class=""  :to="{ name: 'MinhasSolicitacoes'}">
           <a class="nav-link" href="#">
             <i class="bi bi-person-fill text-warning"></i>
              Minhas Solicitações  
           </a>
           </router-link>
         </li>
         <li class="nav-item">
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
     }
   },
   
   data(){
     return{
      
     }
   },
 };
 </script>
 
 
 <style scoped>
 a{
   text-decoration: none;
   
 }
 
 .bi{
   font-size: 23px;
 }
 
 img{
   width: 80%;
 }
 </style>
 
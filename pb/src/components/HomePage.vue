<template>
    <div id="container">
        
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo2.png" alt="Logo" width="250px">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'RegisterPage' }">Cadastrar-se</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'LoginPage' }">Entrar</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div id="banner">
            <img id="imagemdoc" src="../assets/doctorwho.png" alt="">
            <ul id="bannerTexto">
                <li><h1>Gerencie sua saúde</h1></li>
                <li>Cadastrar pacientes</li>
                <li>Agendar consultas</li>
                <li>Atribuir exames</li>
                <li>Gerenciar valores</li>
                <li>Controlar remédios</li>
            </ul>
        </div>

        <div id="containerbanner">
            <div id="minibanner">
                <h2>+ Organização</h2>
                <h2>+ Praticidade</h2>
                <h2>+ Saude</h2>
            </div>
        </div>

        <div id="barra">
      <div id="funcionarios">
      <div id="colaborador">
        <h3>Como um médico credenciado<br> você pode:</h3>
         </div>
    </div>
    </div>

    <ul id="bannerTexto2">
                <li>Cadastrar pacientes</li>
                <li>Agendar consultas</li>
                <li>Atribuir exames</li>
                <li>Gerenciar valores</li>
                <li>Controlar remédios</li>
            </ul>

    </div>
</template>


<script>
export default {
name: 'HomePage',
props: {
    msg: String
}
}
</script>

<style scoped>
body, html{
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#center{
    position: absolute;
    top:20%;
    right: 5%
}

#gestor, #colaborador{
    background-color: #20A0D8;;
    width: 100%;
    color: white;
    display: none;
    
}

#nav li{
    float: right;
  list-style: none;
  padding: 10px;
  font-size: 20px;
  color: white;
 
}
#nav{
    position: relative;
}
nav{
    background-color: #20A0D8;
    
}

.navbar{
    background-color: #20A0D8 !important;
}

.nav-item a{
    color: white  !important;
}

#form{
    max-width: 800px; 
  margin: 0 auto; 
    
}

#imagemdoc{
  width: 100%;
  height: auto;
}


#banner{
    position: relative;
    
}

#bannerTexto{
    position: absolute;
    top: 35%;
    color: white;
    list-style: none;
  

}

#bannerTexto2{
    color: #20A0D8;
    list-style: none;
  display: none;

}
#bannerTexto2 li{
    color: #20A0D8;
    list-style: none;
    font-size: 20px;
    padding: 10px;

}

#banner::before{
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: #051139; /* Cor do filtro */
  opacity: 0.5; /* Opacidade do filtro */
}
#bannerTexto li{
    padding: 10px;
}

#bannerTexto li h1{
    color: #20A0D8;
    padding: 0;
    margin: 0;
}

#minibanner {
    display: flex;
    justify-content: space-between;
   
}

#minibanner h2{
    text-align: center;
    background-color: #20A0D8;
    width: 250px;
    margin-top: 20px;
    color: white;
    padding: 20px;
}

#containerbanner{
    width: 1000px;
    margin: 0 auto;
}
  
@media (max-width: 1100px)
{
 #containerbanner{
  display: none;
 }

 #bannerTexto{
  display: none;
 }

 #bannerTexto2{
    color: #20A0D8;
    list-style: none;
    display:block;

}

#gestor, #colaborador{
    background-color: #20A0D8;;
    width: 100%;
    color: white;
    display: block;
    
}

}




</style>
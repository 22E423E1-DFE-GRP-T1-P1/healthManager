<template>
    <div id="container">
        <nav> 
            <ul id="nav">
                <img id="logo" src="../assets/logo2.png" width="250px" alt="">
                <div id="center">
                <li>Cadastrar-se</li>
                <li>Entrar</li>
                
                </div>
            </ul>
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
    padding: 1px;
}



#form{
    max-width: 800px; 
  margin: 0 auto; 
    
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
    width: 200px;
    color: white;
    padding: 20px;
}

#containerbanner{
    width: 1000px;
    margin: 0 auto;
}
  





</style>
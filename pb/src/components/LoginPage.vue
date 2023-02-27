<template>
<div id="container">
    <nav>
        <ul id="nav" style="text-align: center;">
            <li><img id="logo" src="img/WhatsApp Image 2023-02-03 at 21.24 1 (1).png" width="250px" alt=""></li>
        </ul>
    </nav>
    <h1 style="text-align: center; font-weight: bold;">Login</h1>
    <div class="form-container">
        <form>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <input type="submit" id="btn" value="Entrar">
            </div>
            <div class="form-group-links">
                <a href="#">Lembrar senha</a>
                <a href="#">Esqueci minha senha</a>
            </div>
        </form>
    </div>
</div>
</template>

<script>
</script>

<style>
        .form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #20A0D8;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
 
}

.form-group #btn{
    background-color: #333;
    border: 0;
  color: white;
}

.form-group-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.form-group-links a {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.form-group-links span {
  margin: 0 10px;
}
</style>
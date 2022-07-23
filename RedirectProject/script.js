var numero = document.getElementById("inputNumero");
var cliente = document.getElementById("inputCliente");
var especialidade = document.getElementById("inputEspecialidade");

const removeMask = (value) => {
  if (value) {
      const stringValue = value.toString()
      const regex = /[R$()-.,/% ]/ig
      return stringValue.replace(regex, '')
  }
}

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();
  
  window.open(
    `https://api.whatsapp.com/send?phone=55${removeMask(numero.value)}&text=Olá, ${cliente.value}, tudo bem? Me chamo André Godeiro, sou Advogado. Estou entrando em contato pois o JusBrasil me repassou o seu caso.
  Trata-se de ${especialidade.value}, correto?`,
    "_blank"
  );
});

var numero = document.getElementById("inputNumero");
var cliente = document.getElementById("inputCliente");
var especialidade = document.getElementById("inputEspecialidade");

const removeMask = (value) => {
  if (value) {
<<<<<<< HEAD
    const stringValue = value.toString();
    const regex = /[R$()-.,/% ]/gi;
    return stringValue.replace(regex, "");
  }
};

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(numero.value);
  window.open(
    `https://api.whatsapp.com/send?phone=55${removeMask(
      numero.value
    )}&text=Olá, ${
      cliente.value
    }, tudo bem? Me chamo André Godeiro, sou Advogado. Estou entrando em contato pois o JusBrasil me repassou o seu caso.
=======
      const stringValue = value.toString()
      const regex = /[R$()-.,/% ]/ig
      return stringValue.replace(regex, '')
  }
}

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();
  
  window.open(
    `https://api.whatsapp.com/send?phone=55${removeMask(numero.value)}&text=Olá, ${cliente.value}, tudo bem? Me chamo André Godeiro, sou Advogado. Estou entrando em contato pois o JusBrasil me repassou o seu caso.
>>>>>>> 6e9f236bda78ac1cff2464a5a3bc3644b0515684
  Trata-se de ${especialidade.value}, correto?`,
    "_blank"
  );
});

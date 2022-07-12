var numero = document.getElementById("inputNumero");

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = `https://api.whatsapp.com/send?phone=55${numero.value}&text=232323232323`;
});

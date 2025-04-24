const form = document.querySelector(".formulario-fale-conosco");
const chamaMascara = document.querySelector(".mascaraForm");
const faleConosco = document.querySelector(".faleConosco");

function cliqueinobotao() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  chamaMascara.style.visibility = "visible";
}

function cliqueMascara() {
  chamaMascara.style.visibility = "hidden";
  form.style.left = "-298px";
  form.style.top = "30%";
}

function abrirForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  chamaMascara.style.visibility = "visible";
}

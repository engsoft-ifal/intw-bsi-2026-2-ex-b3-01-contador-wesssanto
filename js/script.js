const totalElemento = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let contador = 0;
totalElemento.textContent = contador;

btnSomar.addEventListener("click", () => {
  contador++;
  totalElemento.textContent = contador;
});

btnZerar.addEventListener("click", () => {
  contador = 0;
  totalElemento.textContent = contador;
});

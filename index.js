let sx = document.getElementById("sx");
let dx = document.getElementById("dx");
let contatore = document.getElementById("contatore");
let valoreContatore = 0;

dx.addEventListener("click", function () {
  valoreContatore++;
  contatore.textContent = valoreContatore;
});

sx.addEventListener("click", function () {
  if (valoreContatore > 0) {
    valoreContatore--;
    contatore.textContent = valoreContatore;
  } else {
    alert("il contatore non può andare sotto zero");
  }
});

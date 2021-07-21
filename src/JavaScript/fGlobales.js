var inputValue;

export function getLongitud(numero) {
  let l = numero.toString().length;

  if (numero == 0) {
    l = 1;
  }

  return l;
}

export function alinear(id, tamaño) {
  if (tamaño == 1) {
    document.getElementById(id).style.left = "var(--estandar)";
  }

  if (tamaño == 2) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 1.5%)";
  }

  if (tamaño == 3) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 3%)";
  }

  if (tamaño == 4) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 4.5%)";
  }

  if (tamaño == 5) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 6%)";
  }

  if (tamaño == 6) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 7.5%)";
  }
  if (tamaño == 7) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 9%)";
  }

  if (tamaño == 8) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 11.5%)";
  }

  if (tamaño == 9) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 13%)";
  }

  if (tamaño == 10) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 14.5%)";
  }

  if (tamaño == 11) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 16%)";
  }

  if (tamaño == 12) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 18%)";
  }

  if (tamaño == 13) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 20%)";
  }

  if (tamaño == 14) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 21.5%)";
  }

  if (tamaño == 15) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 23%)";
  }

  if (tamaño == 16) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 25%)";
  }

  if (tamaño == 17) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 26.5%)";
  }

  if (tamaño == 18) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 28%)";
  }

  if (tamaño == 19) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 30%)";
  }

  if (tamaño == 20) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 32%)";
  }

  if (tamaño == 21) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 33.5%)";
  }

  if (tamaño == 22) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 35%)";
  }

  if (tamaño == 23) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 36%)";
  }

  if (tamaño == 24) {
    document.getElementById(id).style.left = "calc(var(--estandar) - 37.5%)";
  }
}



import { getLongitud, alinear } from "./fGlobales.js";
var inputValue;

export function getMedidasL() {
  function getValor() {
    inputValue = document.getElementById("input").value;
  }
  getValor();
  
  function getMm() {
    let numi;
    let numf;
    let selected;
    let combo;
    let potencia;
    let multiplicacion;
    let titulo;
    let longitud;
    let cantidad;

    const tipo = "mm";

    function cero() {
      let titulo;
      titulo = document.getElementById(tipo);
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    function getLongitud(numero) {
      let l = numero.toString().length;

      if (numero == 0) {
        l = 1;
      }

      return l;
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById(tipo);
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;
    let num = document.getElementById("input").value.toString();

    if (selected == "mm") {
      titulo.innerHTML = inputValue * 1;

      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi * 10;
      titulo.innerHTML = numf;

      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi * 100;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 1000;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi * 25.4;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi * 305;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi * 914;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1.609 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getCm() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    let tipo = "cm";
    let selected;

    function cero() {
      let titulo;
      titulo = document.getElementById("cm");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("cm");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 10;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi * 10;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 100;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi * 2.54;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi * 30.48;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi * 91.44;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 160934;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 100000;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 7);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getDm() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    let selected;
    const tipo = "dm";

    function cero() {
      let titulo;
      titulo = document.getElementById("dm");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("dm");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 100;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 10;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 10;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 3.937;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi * 3.048;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi * 9.114;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 16093;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 10000;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 8);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getM() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    let selected;
    let tipo = "m";

    function cero() {
      let titulo;
      titulo = document.getElementById("m");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("m");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 1000;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 100;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi / 10;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 39.37;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi / 3.281;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi / 1.094;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 1609;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 1000;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 9);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getInch() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let selected;
    let cantidad;
    const tipo = "inch";

    function cero() {
      let titulo;
      titulo = document.getElementById("inch");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("inch");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 25.4;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 2.54;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi * 3.937;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 39.37;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi * 12;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi * 36;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 63360;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 39370;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 8);
      multiplicacion = 2.54 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getFt() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let selected;
    let longitud;
    let titulo;
    let cantidad;
    let tipo = "ft";

    function cero() {
      let titulo;
      titulo = document.getElementById("ft");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("ft");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 305;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 30.48;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi / 3.048;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 3.281;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 12;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
    }

    if (selected == "ft") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi * 36;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 5280;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 3281;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 8);
      multiplicacion = 3.048 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getYd() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    let tipo = "yd";
    let selected;

    function cero() {
      let titulo;
      titulo = document.getElementById("yd");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("yd");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      numf = numi / 914;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 91.44;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi / 9.144;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi * 1.094;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 36;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi / 3;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 1760;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      numf = numi * 1094;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 8);
      multiplicacion = 9.144 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getMile() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    const tipo = "mile";
    let selected;

    function cero() {
      let titulo;
      titulo = document.getElementById("mile");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("mile");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1.609 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 160934;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi / 16093;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi / 16093;
      titulo.innerHTML = numf;
      cero();

      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 63360;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi / 5280;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi / 1760;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
    }

    if (selected == "km") {
      numf = numi / 1.609;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 12);
      multiplicacion = 1.609 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getKm() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let cantidad;
    let selected;
    let tipo = "km";

    function cero() {
      let titulo;
      titulo = document.getElementById("km");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("km");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      numf = numi / 100000;
      titulo.innerHTML = numf;
      cero();

      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      numf = numi / 10000;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      numf = numi / 1000;
      titulo.innerHTML = numf;
      cero();

      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      numf = numi / 39370;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      numf = numi / 3281;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      numf = numi / 1094;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      numf = numi * 1.609;
      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      titulo.innerHTML = inputValue * 1;
      cero();
      longitud = getLongitud(titulo.innerHTML);
    }

    if (selected == "NM") {
      potencia = Math.pow(10, 12);
      multiplicacion = 1 * potencia;
      numf = numi / multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  function getNm() {
    let numi;
    let numf;
    let combo;
    let potencia;
    let multiplicacion;
    let longitud;
    let titulo;
    let selected;
    let cantidad;

    let tipo = "nm";

    function cero() {
      let titulo;
      titulo = document.getElementById("nm");
      if (inputValue == 0) {
        titulo.innerHTML = "0";
      }
    }

    combo = document.getElementById("medidas");
    selected = combo.options[combo.selectedIndex].text;
    titulo = document.getElementById("nm");
    cantidad = document.getElementById("input").value;
    numi = document.getElementById("input").value;

    if (selected == "mm") {
      potencia = Math.pow(10, 6);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "cm") {
      potencia = Math.pow(10, 7);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "dm") {
      potencia = Math.pow(10, 8);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "m") {
      potencia = Math.pow(10, 9);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "inch") {
      potencia = Math.pow(10, 7);
      multiplicacion = 2.54 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "ft") {
      potencia = Math.pow(10, 8);
      multiplicacion = 3.048 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "yd") {
      potencia = Math.pow(10, 8);
      multiplicacion = 9.144 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "mile") {
      potencia = Math.pow(10, 12);
      multiplicacion = 1.609 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "km") {
      potencia = Math.pow(10, 12);
      multiplicacion = 1 * potencia;
      numf = numi * multiplicacion;

      titulo.innerHTML = numf;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }

    if (selected == "NM") {
      titulo.innerHTML = inputValue;
      cero();
      longitud = getLongitud(titulo.innerHTML);
      alinear(tipo, longitud);
    }
  }

  getMm();
  getCm();
  getDm();
  getM();
  getInch();
  getFt();
  getYd();
  getMile();
  getKm();
  getNm();
}

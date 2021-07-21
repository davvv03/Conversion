import { getMedidasL } from "./Longitud.js";
import "../scss/basico.scss";
var inputValue;

function intervalo() {
  setInterval(() => {
    getMedidasL();
  }, 100);
}

intervalo();

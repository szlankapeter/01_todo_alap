import Elem from "./Elem.js";

class Megjelenit {
    #lista = {};
    constructor(tarolo, lista) {
        this.#lista = lista;
        tarolo.html('<table class="table table-hover">')
        this.tablaElem = tarolo.children("table");
        this.tablazatbaIr();
    }


    tablazatbaIr() {
        this.#lista.forEach((elem) => {
            const sor = new Elem(elem, this.tablaElem);
        });
    }




} export default Megjelenit;
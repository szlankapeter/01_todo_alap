
class Megjelenit {

    constructor(tarolo, lista) {
        this.tarolo = tarolo;
        let txt = `<table class="table table-hover">`;
        for(let i=0;i<lista.length;i++){
            txt += `<tr><td scope="col">${lista[i].tevekenyseg}</td><td>${lista[i].hatarido}</td></tr>`;
        }
        tarolo.append(txt);
    }


} export default Megjelenit;
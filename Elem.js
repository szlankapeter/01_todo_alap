class Elem {
    #obj = {}
    constructor(obj, tarolo) {
        
        this.#obj = obj
        this.tarolo = tarolo;
        this.#sor();

        this.soreElem=this.tarolo.children("tr:last-child");
        this.keszElem = this.soreElem.children("td").children(".kesz");
        this.megseElem = this.soreElem.children("td").children(".megse");
        this.torolElem = this.soreElem.children("td").children(".torol");
        console.log(this.keszElem);
        this.keszElem.on("click",()=>{
            this.soreElem.css("background-color", "green");
        })
        this.megseElem.on("click",()=>{
            this.soreElem.css("background-color", "white");
        })
        this.torolElem.on("click",()=>{
            this.soreElem.remove();
        })

    }

    #sor() {
        let txt = "<tr>";
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
        }
        txt += `<td><button class="kesz">✅</button></td>`;
        txt += `<td><button class="megse">❌</button></td>`;
        txt += `<td><button class="torol">&#128465;</button></td>`;
        txt += "</tr>"
        this.tarolo.append(txt);
    }


} export default Elem
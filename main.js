import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";

$(function(){

    const tarolo = $(".tarolo");
    new Megjelenit(tarolo, TODOLIST2);

});
import { mobile } from "./Movil";
export class mobileLibrary {
    private name : string;
    private location : string;
    private moviles : mobile[]
    private totalprice : number;
    constructor(name : string, location : string, moviles: mobile[]){
        name = this.name;
        location = this.location;
        moviles = this.moviles;
    }
    // getters
    getName(){return this.name};
    getLocation(){return this.location};
    getMoviles(){return this.moviles};
    getTotalPrice(){return this.totalprice};
    // setters
    setName(entrada):string{
        this.name = entrada;
        return this.name
    };setLocation(entrada):string{
        this.location = entrada;
        return this.location;
    };setmoviles(entrada):mobile[]{
        this.moviles = entrada;
        return this.moviles;
    };settotalprice(entrada):number{
        this.totalprice = entrada;
        return this.totalprice;
    }
    totalPriceCalc(){
        let resultado : number = 0;
        for (let i = 0; i < this.moviles.length; i++) {
            resultado = resultado + this.moviles[i].getPrice();
        }
        console.log(resultado);
    }
}
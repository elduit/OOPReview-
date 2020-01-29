export class mobile {
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;
    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number) {
        name = this.name;
        model = this.model;
        trademark = this.trademark;
        sdSize = this.sdSize;
        color = this.color;
        is5G = this.is5G;
        cameraNumber = this.cameraNumber;
        price = this.price;
    }
    printAll(){
        console.log("The characteristics of the mobile " + this.name + " are:" + 
        "\n\t Name: " + this.name + 
        "\n\t Model: " + this.model +
        "\n\t Trade Mark: " + this.trademark +
        "\n\t SD Size: " + this.sdSize +
        "\n\t Color: " + this.color +
        "\n\t Is 5G?: " + this.is5G +
        "\n\t Number of cameras: " + this.cameraNumber +
        "\n\t Price: " + this.price)
    }
    getName(){
        return this.name;
    }
    getModel(){
        return this.model;
    }
    gettrademark(){
        return this.trademark;
    }
    getSdSize(){
        return this.sdSize;
    }
    getColor(){
        return this.color;
    }
    getIs5G(){
        return this.is5G;
    }
    getCameraNumber(){
        return this.cameraNumber;
    }
    getPrice(){
        return this.price;
    }
    setName(entrada):string{
        this.name = entrada;
        return this.name;
    }
    setModel(entrada):string{
        this.model = entrada;
        return this.model;
    }
    settrademark(entrada):string{
        this.trademark = entrada;
        return this.trademark;
    }
    setSdSize(entrada):number{
        this.sdSize = entrada;
        return this.sdSize;
    }
    setColor(entrada):string{
        this.color = entrada;
        return this.color;
    }
    setIs5G(entrada):boolean{
        this.is5G = entrada;
        return this.is5G;
    }
    setCameraNumber(entrada):number{
        this.cameraNumber = entrada;
        return this.cameraNumber;
    }
    setPrice(entrada):number{
        this.price = entrada;
        return this.price;
    }
}
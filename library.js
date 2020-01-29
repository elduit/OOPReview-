"use strict";
exports.__esModule = true;
var mobileLibrary = /** @class */ (function () {
    function mobileLibrary(name, location, moviles) {
        name = this.name;
        location = this.location;
        moviles = this.moviles;
    }
    // getters
    mobileLibrary.prototype.getName = function () { return this.name; };
    ;
    mobileLibrary.prototype.getLocation = function () { return this.location; };
    ;
    mobileLibrary.prototype.getMoviles = function () { return this.moviles; };
    ;
    mobileLibrary.prototype.getTotalPrice = function () { return this.totalprice; };
    ;
    // setters
    mobileLibrary.prototype.setName = function (entrada) {
        this.name = entrada;
        return this.name;
    };
    ;
    mobileLibrary.prototype.setLocation = function (entrada) {
        this.location = entrada;
        return this.location;
    };
    ;
    mobileLibrary.prototype.setmoviles = function (entrada) {
        this.moviles = entrada;
        return this.moviles;
    };
    ;
    mobileLibrary.prototype.settotalprice = function (entrada) {
        this.totalprice = entrada;
        return this.totalprice;
    };
    mobileLibrary.prototype.totalPriceCalc = function () {
        var resultado = 0;
        for (var i = 0; i < this.moviles.length; i++) {
            resultado = resultado + this.moviles[i].getPrice();
        }
        console.log(resultado);
    };
    return mobileLibrary;
}());
exports.mobileLibrary = mobileLibrary;

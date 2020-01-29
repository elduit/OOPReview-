"use strict";
exports.__esModule = true;
var mobile = /** @class */ (function () {
    function mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        name = this.name;
        model = this.model;
        trademark = this.trademark;
        sdSize = this.sdSize;
        color = this.color;
        is5G = this.is5G;
        cameraNumber = this.cameraNumber;
        price = this.price;
    }
    mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile " + this.name + " are:" +
            "\n\t Name: " + this.name +
            "\n\t Model: " + this.model +
            "\n\t Trade Mark: " + this.trademark +
            "\n\t SD Size: " + this.sdSize +
            "\n\t Color: " + this.color +
            "\n\t Is 5G?: " + this.is5G +
            "\n\t Number of cameras: " + this.cameraNumber +
            "\n\t Price: " + this.price);
    };
    mobile.prototype.getName = function () {
        return this.name;
    };
    mobile.prototype.getModel = function () {
        return this.model;
    };
    mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    mobile.prototype.getColor = function () {
        return this.color;
    };
    mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    mobile.prototype.getPrice = function () {
        return this.price;
    };
    mobile.prototype.setName = function (entrada) {
        this.name = entrada;
        return this.name;
    };
    mobile.prototype.setModel = function (entrada) {
        this.model = entrada;
        return this.model;
    };
    mobile.prototype.settrademark = function (entrada) {
        this.trademark = entrada;
        return this.trademark;
    };
    mobile.prototype.setSdSize = function (entrada) {
        this.sdSize = entrada;
        return this.sdSize;
    };
    mobile.prototype.setColor = function (entrada) {
        this.color = entrada;
        return this.color;
    };
    mobile.prototype.setIs5G = function (entrada) {
        this.is5G = entrada;
        return this.is5G;
    };
    mobile.prototype.setCameraNumber = function (entrada) {
        this.cameraNumber = entrada;
        return this.cameraNumber;
    };
    mobile.prototype.setPrice = function (entrada) {
        this.price = entrada;
        return this.price;
    };
    return mobile;
}());
exports.mobile = mobile;

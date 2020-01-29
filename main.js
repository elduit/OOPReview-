"use strict";
exports.__esModule = true;
var Movil_1 = require("./Movil");
// Nokia3210
var movil0 = new Movil_1.mobile("", "", "", 0, "", false, 0, 0);
movil0.setName("Nokia3210");
movil0.setModel("3210");
movil0.settrademark("Nokia");
movil0.setSdSize(16);
movil0.setColor("gris");
movil0.setIs5G(false);
movil0.setCameraNumber(0);
movil0.setPrice(150);
// Modificar Nokia
movil0.setIs5G(true);
movil0.setCameraNumber(5);
// Iphone3G
var movil1 = new Movil_1.mobile("", "", "", 0, "", false, 0, 0);
movil1.setName("Iphone3G");
movil1.setModel("3G");
movil1.settrademark("Apple");
movil1.setSdSize(32);
movil1.setColor("blanco");
movil1.setIs5G(false);
movil1.setCameraNumber(3);
movil1.setPrice(290);
// Galaxy10
var movil2 = new Movil_1.mobile("", "", "", 0, "", false, 0, 0);
movil2.setName("Samsung Galaxy 10");
movil2.setModel("Galaxy 10");
movil2.settrademark("Samsung");
movil2.setSdSize(64);
movil2.setColor("negro");
movil2.setIs5G(true);
movil2.setCameraNumber(3);
movil2.setPrice(350);
// Mostrar array
var arrMovil = [movil0, movil1, movil2];
for (var i = 0; i < arrMovil.length; i++) {
    console.log(arrMovil[i].getName());
    console.log(arrMovil[i].getModel());
    console.log(arrMovil[i].gettrademark());
    console.log(arrMovil[i].getSdSize());
    console.log(arrMovil[i].getColor());
    console.log(arrMovil[i].getIs5G());
    console.log(arrMovil[i].getCameraNumber());
    console.log(arrMovil[i].getPrice());
}
// // Mostrar Nokia
// movil0.printAll();
// console.log(movil0.getName());
// console.log(movil0.getModel());
// console.log(movil0.gettrademark());
// console.log(movil0.getSdSize());
// console.log(movil0.getColor());
// console.log(movil0.getIs5G());
// console.log(movil0.getCameraNumber());
// console.log(movil0.getPrice());
// // Mostrar Iphone
// console.log(movil1.getName());
// console.log(movil1.getModel());
// console.log(movil1.gettrademark());
// console.log(movil1.getSdSize());
// console.log(movil1.getColor());
// console.log(movil1.getIs5G());
// console.log(movil1.getCameraNumber());
// console.log(movil1.getPrice());
// // Mostrar Samsung
// console.log(movil2.getName());
// console.log(movil2.getModel());
// console.log(movil2.gettrademark());
// console.log(movil2.getSdSize());
// console.log(movil2.getColor());
// console.log(movil2.getIs5G());
// console.log(movil2.getCameraNumber());
// console.log(movil2.getPrice());

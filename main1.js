"use strict";
exports.__esModule = true;
var Movil_1 = require("./Movil");
var Library_1 = require("./Library");
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
// Library 
var library0 = new Library_1.mobileLibrary("", "", []);
library0.setName("Biblioteca moviles");
library0.setLocation("Madrid");
library0.setmoviles([movil0, movil1, movil2]);
library0.totalPriceCalc();

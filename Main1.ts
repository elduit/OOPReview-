import { mobile } from "./Movil";
import { mobileLibrary } from "./Library";
// Nokia3210
let movil0 = new mobile("","","",0,"",false,0,0);
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
let movil1 = new mobile("","","",0,"",false,0,0);
movil1.setName("Iphone3G");
movil1.setModel("3G");
movil1.settrademark("Apple");
movil1.setSdSize(32);
movil1.setColor("blanco");
movil1.setIs5G(false);
movil1.setCameraNumber(3);
movil1.setPrice(290);
// Galaxy10
let movil2 = new mobile("","","",0,"",false,0,0);
movil2.setName("Samsung Galaxy 10");
movil2.setModel("Galaxy 10");
movil2.settrademark("Samsung");
movil2.setSdSize(64);
movil2.setColor("negro");
movil2.setIs5G(true);
movil2.setCameraNumber(3);
movil2.setPrice(350);
// Library 
let library0 = new mobileLibrary("","",[],0)
library0.setName("Biblioteca moviles");
library0.setLocation("Madrid");
library0.setmoviles([movil0,movil1,movil2]);
library0.pritAll();

// Nokia3210
let movil01 = new mobile("","","",0,"",false,0,0);
movil01.setName("Nokia3210");
movil01.setModel("3210");
movil01.settrademark("Nokia");
movil01.setSdSize(16);
movil01.setColor("gris");
movil01.setIs5G(false);
movil01.setCameraNumber(0);
movil01.setPrice(150);
// Modificar Nokia
movil01.setIs5G(true);
movil01.setCameraNumber(5);
// Iphone3G
let movil11 = new mobile("","","",0,"",false,0,0);
movil11.setName("Iphone3G");
movil11.setModel("3G");
movil11.settrademark("Apple");
movil11.setSdSize(32);
movil11.setColor("blanco");
movil11.setIs5G(false);
movil11.setCameraNumber(3);
movil11.setPrice(290);
// Galaxy10
let movil21 = new mobile("","","",0,"",false,0,0);
movil21.setName("Samsung Galaxy 10");
movil21.setModel("Galaxy 10");
movil21.settrademark("Samsung");
movil21.setSdSize(64);
movil21.setColor("negro");
movil21.setIs5G(true);
movil21.setCameraNumber(3);
movil21.setPrice(350);
// Library 
let library01 = new mobileLibrary("","",[],0)
library01.setName("Biblioteca moviles");
library01.setLocation("Madrid");
library01.setmoviles([movil0,movil1,movil2]);
library01.pritAll();
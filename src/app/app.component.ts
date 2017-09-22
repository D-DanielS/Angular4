import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 4;
  b = 5;
  listo = false;
  nombreuno:string = ""
  nombredos:string = ""

  lugares:any = [
    {plan: "pagado" ,cercania : 1 ,distancia: 1.3 ,active: false, nombre: "eleme 01"},
    {plan: "gratuito" ,cercania : 1 ,distancia: 1.8 ,active: true, nombre: "eleme 02"},
    {plan: "gratuito" ,cercania : 2 ,distancia: 5 ,active: false, nombre: "eleme 03"},
    {plan: "gratuito" ,cercania : 3 ,distancia: 10 ,active: true, nombre: "eleme 04"},
    {plan: "pagado" ,cercania : 3 ,distancia: 35 ,active: false, nombre: "eleme 05"},
    {plan: "gratuito" ,cercania : 3 ,distancia: 120 ,active: false, nombre: "eleme 06"}
  ];

  lat:number = 2.9306004;
  lng:number = -75.2651238;


  personas:any = [
    {edad: 15, nombre:"carlos"},
    {edad: 18, nombre:"juan"},
    {edad: 13, nombre:"rosa"},
    {edad: 18, nombre:"miguel"},
    {edad: 18, nombre:"frank"},
    {edad: 17, nombre:"Misael"},
    {edad: 13, nombre:"Jackson"}
  ]

  constructor(){
    /*
    setTimeout(()=>{
      this.listo = true;
    },3000)
    */
  }
  /*
  hacerAlgo(){
    alert("Haciendo Algo");
  }
  */
}

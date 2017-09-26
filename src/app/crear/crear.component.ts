import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route:ActivatedRoute){
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);

  }

  guardarLugar(){
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result) => {
            this.lugar.lat = result.json().results[0].geometry.location.lat;
            this.lugar.lng = result.json().results[0].geometry.location.lng;

            this.lugar.id = Date.now();
            this.lugaresService.guardarLugar(this.lugar);

            alert("Negocio Guardado con Exito");
            this.lugar = {};

        });


  }
}

import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['../app.component.css']
})
export class LugaresComponent {
  lat:number = 2.9306004;
  lng:number = -75.2651238;
  lugares = null;
  errorText = null;

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
        .subscribe(lugares =>{
            this.lugares = lugares;
            var me = this;
            me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
        }, error => {
            console.log(error.statusText);
            this.errorText = "Disculpa las molestias estamos trabajando para solucionarlo." + error.statusText;

        });

  }

}
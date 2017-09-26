import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()

export class LugaresService{

    lugares:any = [
        {id: 1, plan: 'pagado' , cercania : 1, distancia: 1.3, active: true, nombre: 'Floristeria Amparo', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 2, plan: 'gratuito' , cercania : 1, distancia: 1.8, active: true, nombre: 'Rous Accesorios', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 3, plan: 'gratuito' , cercania : 2, distancia: 5, active: true, nombre: 'AS Boutique', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 4, plan: 'gratuito' , cercania : 3, distancia: 10, active: true, nombre: 'Restaurante Mil Amores', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 5, plan: 'pagado' , cercania : 3, distancia: 35, active: true, nombre: 'Heladeria Rosa ', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 6, plan: 'gratuito' , cercania : 3, distancia: 120, active: true, nombre: 'Parqueadero La 14', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'}
    ];

    constructor(private afDB: AngularFireDatabase){}

    public getLugares(){
        return this.lugares;
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null
    }
    public guardarLugar(lugar){
        this.afDB.database.ref('lugares/1').set(lugar);
    }

}
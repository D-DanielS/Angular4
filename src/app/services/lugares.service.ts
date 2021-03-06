import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class LugaresService{

    API_ENDPOINT = 'https://platzisquare-dc0be.firebaseio.com';

    lugares:any = [
        {id: 1, plan: 'pagado' , cercania : 1, distancia: 1.3, active: true, nombre: 'Floristeria Amparo', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 2, plan: 'gratuito' , cercania : 1, distancia: 1.8, active: true, nombre: 'Rous Accesorios', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 3, plan: 'gratuito' , cercania : 2, distancia: 5, active: true, nombre: 'AS Boutique', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 4, plan: 'gratuito' , cercania : 3, distancia: 10, active: true, nombre: 'Restaurante Mil Amores', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 5, plan: 'pagado' , cercania : 3, distancia: 35, active: true, nombre: 'Heladeria Rosa ', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'},
        {id: 6, plan: 'gratuito' , cercania : 3, distancia: 120, active: true, nombre: 'Parqueadero La 14', description: 'Descripción de este negocio. Más adelante dentremos mas informacion'}
    ];

    constructor(private afDB: AngularFireDatabase, private http: Http){}

    public getLugares(){
        //return this.afDB.list('/lugares')
        return this.http.get(this.API_ENDPOINT + '/.json')
            .map((resultado) =>{
                const data = resultado.json().lugares;
                return data;

            })

    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null
    }
    public guardarLugar(lugar){
        console.log(lugar);
        //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar,  {headers: headers})
            .subscribe();
    }
    public editarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    }
    public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);

    }

    public getLugar(id){
        return this.afDB.object('lugares/'+id)

    }
}
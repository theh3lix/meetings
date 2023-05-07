import { Komitet } from "../_models/komitet.model";


export class ApiService {
    getFakeCourses() {
        let komitety: Komitet[] = [
            {Id: 0, Name: 'Komitet 1', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 1, Name: 'Komitet 2', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 2, Name: 'Komitet 3', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 3, Name: 'Komitet 4', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 4, Name: 'Komitet 5', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
          ]
        return komitety;
    }

}
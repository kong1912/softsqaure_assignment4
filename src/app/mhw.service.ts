import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin} from 'rxjs';
import { Armor, Charm, Weapon } from './interface';

@Injectable({
  providedIn: 'root'
})
export class MhwService {

  private apiUrl = 'https://mhw-db.com';

  constructor(private http: HttpClient) {}

  getArmorById(id: number): Observable<any>{
    return this.http.get<Armor>(`${this.apiUrl}/armor/${id}`);
  }

  getSpecificArmors(armorIds : number[]): Observable<any[]> {
    const requests: Observable<Armor>[] = armorIds.map(id => this.getArmorById(id));
    return forkJoin(requests);
  }

  getCharmById(id: number): Observable<any> {
    return this.http.get<Charm>(`${this.apiUrl}/charms/${id}`);
  }

  getWeaponById(id : number): Observable<any> {
    return this.http.get<Weapon>(`${this.apiUrl}/weapons/${id}`);
  }

}

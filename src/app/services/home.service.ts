import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../Core/modules/Menu';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
 homes = [
    {id:1 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/1.jpg"},
    {id:2 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/2.jpg"},
    {id:3 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/3.jpg"},
    
  ]

  
  constructor(private http: HttpClient) { }
  apiEndPoint='http://localhost:3000/menus';

  getAllhome() : Observable<Menu[]>{
     return this.http.get<Menu[]>(this.apiEndPoint)
  }

  getHomeById(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiEndPoint}/${id}`);
  }

  addHome(ms : Menu):Observable<any>{
    return this.http.post(this.apiEndPoint,ms);
  }
  
  deleteHome(id:number):Observable<any>{
    return this.http.delete(`${this.apiEndPoint}/${id}`);
  }
  updateHome(id:number,ms:Menu):Observable<any>{
    return this.http.put(this.apiEndPoint+'/'+id,ms);
}}

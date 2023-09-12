import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl : string ="http://localhost:3000/";

 httpHeaders:HttpHeaders = new HttpHeaders({
  'content-type' : 'application/json'
 })

  constructor(private http :HttpClient) { }

  postDataToServer(endPoint : string , body : any){
    const url = this.baseUrl + endPoint;
    //localhost:3000/users
     return this.http.post(url,body, { headers : this.httpHeaders});
  }

  getDataToServer(endPoint : string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders})
  }
}

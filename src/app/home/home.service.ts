import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
 baseUrl='http://localhost:3000/';
 dataStored:any;
  data: any;
  constructor(
    private httpClient: HttpClient
  ) {}
   getDataList(){
      return this.data=this.httpClient.get(this.baseUrl+'DataList')
   }
}

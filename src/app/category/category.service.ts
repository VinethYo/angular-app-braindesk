import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl ='https://5fd86b697e05f000170d2796.mockapi.io/category/'

  constructor(private httpClient:HttpClient ) { }
  //api call fo add
addCategory(data:any){
  return this.httpClient.post(this.apiUrl,data)
 }
 getCategory(){
   return this.httpClient.get(this.apiUrl)
 }
 getById(id:any){
   return this.httpClient.get(this.apiUrl + '/' + id)
 }
 updateCategory(id:any,data:any){
   return this.httpClient.put(this.apiUrl + '/' +id ,data)
 }
 deleteCategory(id:any){
   return this.httpClient.delete(this.apiUrl + '/' +id )
 }
}

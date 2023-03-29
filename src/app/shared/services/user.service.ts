import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/data'

  constructor(private http: HttpClient) { }

  //Get Data
  getData() {
    return this.http.get(this.url)
  }

  // Add Data
  addData(data: any) {
    return this.http.post(this.url, data)
  }

  //Delete Data
  delData(id: any) {
    const baseUrl = `${this.url}/${id}`
    return this.http.delete(baseUrl)
  }

  //getSingle User
  getOneUser(id: any) {
    const baseUrl = `${this.url}/${id}`
    return this.http.get(baseUrl)
  }

  //Update
  update(UserObj: any) {
    const baseUrl = `${this.url}/${UserObj.id}`
    return this.http.put(baseUrl, UserObj)
  }
}

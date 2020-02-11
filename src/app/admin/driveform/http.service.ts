import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  register(userdata)
  {
    return this.http.post("http://localhost:8080/DriveTracker/CreateDrive",userdata);
  }

  viewData()
  {
    return this.http.get("http://localhost:8080/DriveTracker/ViewDrive");
  }
  data(y)
  {
    return this.http.post("http://localhost:8080/DriveTracker/Deletedata",y);
  }
  update(z)
  {
    return this.http.post("http://localhost:8080/DriveTracker/Edit",z);
  }
}

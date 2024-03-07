import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public getname(){
    return "my name is dina ";
  }
}

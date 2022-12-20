import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  run(){
    console.log("Hello ConfigService!!");
  }
}

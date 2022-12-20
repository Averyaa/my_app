import { ConfigService } from './../_services/config.service';
import { Component, NgModule, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl(''),
  });

  constructor(
    public configSever: ConfigService
  ){}

  ngOnInit(): void{
    this.configSever.run();
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}

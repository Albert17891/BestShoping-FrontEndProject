import { NgForOfContext } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(public authService:AuthService){}

  onLogin(f:NgForm){
       this.authService.LoginUser(f.value.username,f.value.password);
  }
}

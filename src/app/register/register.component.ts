import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public authService:AuthService){}

  onRegister(f:NgForm){
       this.authService.RegisterUser(f.value.username,f.value.firstname,f.value.lastname,f.value.email,f.value.password)
  }
}

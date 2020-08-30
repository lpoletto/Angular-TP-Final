import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;

  constructor(private fb:FormBuilder, private router:Router) {
    this.myForm = this.fb.group({
      //validaciones
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  // Métodos
  login(){
    console.log(this.myForm.value);
    alert("Login correcto")
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm : FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.myForm = this.fb.group({
      // Aquí construimos le formulario
      name : ['', [Validators.required, Validators.minLength(4)]],
      lastname : ['', [Validators.required]],
      email : ['', [Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  // Metodos 
  registro(){
    console.log(this.myForm.value);
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
  }

}

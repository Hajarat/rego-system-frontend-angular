import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  // Thanks to: https://www.youtube.com/watch?v=JeeUY6WaXiA

  regForm : FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.regForm = this.fb.group({
      usage: 'angular',
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]{2,30}$/)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]{1,7}$/), Validators.min(18), Validators.max(65)]],
      level: ['1'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d).{6,14}$/)]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('http://localhost:8080/Registration/RegisterServlet', this.regForm.value).subscribe(res=>{
      console.log(res)
    });
  }

  get name() {
    return this.regForm.get('name');
  }
  get age() {
    return this.regForm.get('age');
  }
  get email() {
    return this.regForm.get('email');
  }
  get password() {
    return this.regForm.get('password');
  }

}

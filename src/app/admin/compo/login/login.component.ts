import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data!:FormGroup
  constructor() { }

  
  ngOnInit(): void {
    this.data = new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
  }

  submit(){
    console.log(this.data.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  ngOnInit(): void {      
  }

  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/main'])
    })
    .catch(error => console.log(error))
  }

  goReg(){
    this.router.navigate(['/register'])
  }
}

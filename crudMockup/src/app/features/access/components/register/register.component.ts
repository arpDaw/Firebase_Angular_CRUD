import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ){
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {      
  }

  onSubmit(){
   this.userService.register(this.formReg.value)
   .then(response =>{
    console.log(response)
    this.router.navigate(['/login'])
   })
   .catch(error => console.log(error));
  }

  goLog(){
    this.router.navigate(['/login'])
  }
}

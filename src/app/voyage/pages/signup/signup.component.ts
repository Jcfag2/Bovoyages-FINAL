import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onFormSubmit(userForm:NgForm){
    // console.log(userForm.value);
    this.authService.signUp(userForm.value,
      (error) => this.error = error
      );
  }

  resetUserForm(userForm:NgForm){
    userForm.resetForm();
  }

}

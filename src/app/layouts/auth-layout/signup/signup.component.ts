import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user: any = {
    email: '',
    password: '',
    accept_tc: true
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log("signed up already")
    this.router.navigate(['/']);
    //this.authService.signupUser(email, password);
  }

}

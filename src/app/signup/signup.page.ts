import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username: "";
  password: "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUpUser () {
    const userObj = {
      username: this.username,
      passsword: this.password
    };
    this.userService.addUser(userObj);
    this.router.navigateByUrl('/login');
  }

}

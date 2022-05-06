import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username: "";
  password: "";

  constructor(private userService: UserService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: message
    });

    await toast.present();
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

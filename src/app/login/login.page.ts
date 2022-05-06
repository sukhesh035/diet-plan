import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private userService: UserService, private toastController: ToastController, private router: Router) { }

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

  loginUser() {
    const currentUsers = this.userService.getUsers();

    const filteredUser = currentUsers.find(obj => {
      return (obj.username === this.username && obj.passsword === this.password)
    });

    let message = "";
    if (filteredUser) {
      message = "Login Successful"
      this.userService.currentLoggedInUser = filteredUser;
      setTimeout(() => {
        this.router.navigateByUrl('home/tabs/profile');
      }, 2000);
    } else {
      message = "Incorrect Username or password";
    }

    this.showToast(message);

  }

}

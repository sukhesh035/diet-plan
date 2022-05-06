import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  userData:any;
  ngOnInit() {
    this.userData = this.userService.currentLoggedInUser
  }

  saveChanges () {
    this.userService.updateUserRecord(this.userData);
    this.router.navigateByUrl('home/tabs/tab1');
  }

  logout () {
    this.router.navigateByUrl('/login');
  }
}

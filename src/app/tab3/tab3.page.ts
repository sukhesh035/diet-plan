import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  redords: any = []

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.redords = this.userService.currentLoggedInUser.userRecords;
    console.log(this.redords)
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [{
    passsword: "test",
    username: "test"
  }];

  currentLoggedInUser = {}

  constructor() { }


  addUser(data) {
    this.users.push(data)
    console.log(data)
  }

  getUsers() {
    return this.users
  }



}

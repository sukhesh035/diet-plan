import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [{
    passsword: "test",
    username: "test",
    userRecords: []
  }];

  currentLoggedInUser: any = { userRecords: [] }

  constructor() { }


  addUser(data) {
    this.users.push(data)
    console.log(data)
  }

  getUsers() {
    return this.users
  }

  addRecord(record) {
    console.log(record)

    if(this.currentLoggedInUser.userRecords) {
      this.currentLoggedInUser.userRecords.push(record)
    } else {
      this.currentLoggedInUser = {...this.currentLoggedInUser, userRecords: [record]}
    }


  }

  updateUserRecord(data) {
    this.currentLoggedInUser = { ...this.currentLoggedInUser, ...data }
  }

}

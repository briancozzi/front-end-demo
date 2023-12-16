import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private LOGGED_IN_USER = 'eventlify-user';
  constructor() {}

  set loggedInUser(val: any) {
    localStorage.setItem(this.LOGGED_IN_USER, JSON.stringify(val));
  }

  deleteUser() {
    localStorage.removeItem(this.LOGGED_IN_USER);
  }

  get panel_user() {
    try {
      const lsValue = localStorage.getItem(this.LOGGED_IN_USER);
      if (lsValue) {
        const user = JSON.parse(lsValue).employee;
        return user;
      } else return false;
    } catch (error) {
      return false;
    }
  }

  // Token

  get authToken() {
    try {
      const lsValue = localStorage.getItem(this.LOGGED_IN_USER);
      if (lsValue) {
        const token = JSON.parse(lsValue).authToken;
        return token;
      } else return false;
    } catch (error) {
      return false;
    }
  }

  get userRole() {
    try {
      const lsValue = localStorage.getItem(this.LOGGED_IN_USER);
      if (lsValue) {
        // const user = JSON.parse(lsValue).employee.role;
        return 'Admin';
      } else return false;
    } catch (error) {
      return false;
    }
  }
}

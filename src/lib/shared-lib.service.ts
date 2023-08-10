import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  private userName: string = '';

  public get user(): string | null {
    if(this.userName) {
      return this.userName;
    } else {
      return localStorage.getItem("userName");
    }
  }

  constructor() { }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
    localStorage.setItem("userName", this.userName);
  }

  public logout() {
    this.userName = '';
    localStorage.removeItem("userName");
  }

}

import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  providers: [UserService],
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    // TODO: Define
  }
  
  signUp() {
    this.userService.register(this.user);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
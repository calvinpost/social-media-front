import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profilePic: string = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png";
  
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  })  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(e: any): void {
    e.preventDefault()
    this.authService.register(this.registerForm.value.firstName || "", this.registerForm.value.lastName || "", this.registerForm.value.email || "", this.registerForm.value.password || "", this.registerForm.value.username || "", this.profilePic)
      .subscribe(
        (response) => {
          this.router.navigate(['login'])
        }
      )
  }

}

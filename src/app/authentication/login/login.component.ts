import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService, UserService } from 'src/app/core/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  constructor(private fb: FormBuilder, private serivce: UserService, private router: Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    })
  }
  onSubmit() {
    // console.log(this.form.value);
    const { remember } = this.form.value
    // console.log(remember);
    this.serivce.loginUser(this.form.value).subscribe({
      next: (response: any) => {
        // console.log(response);
        Swal.fire({
          icon: "success",
          title: "login successfull",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.tokenService.clearStorage()
          this.tokenService.setToken(response.body.data.token, remember)
          this.tokenService.setRole(response.body.data.user.role)
          this.tokenService.setName(response.body.data.user.username)
          this.router.navigateByUrl('/')
        });
      },
      error: (error) => {
        Swal.fire({
          title: "Oops...",
          icon: "info",
          text: error.error.message
        })
        console.log(error);
      }
    })
  }

}

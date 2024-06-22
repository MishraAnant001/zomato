import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup
  submitted = false
  constructor(private fb: FormBuilder, private service: UserService, private messageService: MessageService,private router :Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      role: ['user'],
      username: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }
  get f() {
    return this.form.controls
  }
  resetForm() {
    this.submitted = false
    this.form.reset()
    this.form.controls['role'].setValue("user")
  }
  submitForm() {
    // console.log(this.f['password'].errors);
    // console.log(this.f['phone'].errors);
    // console.log(this.form);
    this.submitted = true
    this.service.signupUser(this.form.value).subscribe({
      next:(response)=>{
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "user registered successfully",
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.router.navigateByUrl('/auth/login')
        });

      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}

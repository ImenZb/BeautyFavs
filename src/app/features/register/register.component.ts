import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder,
        private _router: Router,
        private _auth: AngularFireAuth,
        private _userService: UserService
        ) { }
 
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
        this.submitted = true;
        // form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this._userService.registerWithEmailPwd(this.registerForm.value);
        this._router.navigate(['/home']);
        
    }
}

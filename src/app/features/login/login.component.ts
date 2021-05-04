import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { LOGGED_KEY } from 'src/app/guards/intro.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AngularFireAuth,
    private _userService: UserService,
    private _alertController: AlertController,
    private _router: Router,
    private _loadingController: LoadingController
  ) {}

  ngOnInit(): void {
    this.credentials = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async loginWithGoogle() {
    await Storage.set({key: LOGGED_KEY, value: 'true'});
    this._userService.GoogleAuth();
  }

  async login() {
    const loading = await this._loadingController.create();
    await loading.present();

    this._authService
      .signInWithEmailAndPassword(
        this.credentials.controls.email.value,
        this.credentials.controls.password.value
      )
      .then(
        async (res) => {
          await loading.dismiss();
          this._router.navigateByUrl('/home', { replaceUrl: true });
        },
        async (res) => {
          await loading.dismiss();
          const alert = await this._alertController.create({
            header: 'Login failed',
            message: res.error.error,
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
  }
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss'],
})
export class EditProfilComponent implements OnInit {
  user$: Observable<Partial<IUser>>;
  photoUrl: string;
  isActivatedCam = false;
  editForm : FormGroup;
  uid: string;
  constructor(
    private _auth: AngularFireAuth,
    private _userService: UserService,
    private _photo: PhotoService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required]
  });
  }

  async ionViewWillEnter(): Promise<void> {
    const { uid = null } = await this._auth.currentUser;
    this.uid = uid;
    this.user$ = this._userService.getByUid(uid);
    this.photoUrl = await this.user$
      .pipe(
        first(),
        map((user) =>
          user?.photoUrl ? user?.photoUrl : 'assets/images/users/profile_32.png'
        )
      )
      .toPromise();
  }

  
  async takePicture() {
    await this._photo.takePict();
    this.photoUrl = this._photo.avatarURL;
    this.isActivatedCam = true;
  }

  savePicture() {
    this._photo.savePict();
    this.isActivatedCam = false;
  }

  onSubmit(){
    this._userService.updateUserData({...this.editForm.value, uid: this.uid});
    this._router.navigate(['profil']);
  }
}

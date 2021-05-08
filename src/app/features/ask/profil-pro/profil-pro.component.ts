import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.scss'],
})
export class ProfilProComponent implements OnInit {
  proUser$: Observable<Partial<IUser>>;
  uid: string;
  uidpro: string;
  isCardCollapse: number = 1;
  isAskingPro: boolean = false;
  private _isFollower$ = new BehaviorSubject(false);
  isFollower$ = this._isFollower$.asObservable();
  nbFollowers$: Observable<number>;
  constructor(
    private _activeRouter: ActivatedRoute,
    private _userService: UserService,
    private _auth: AngularFireAuth,
    private _router: Router,
    private _actionSheetCtrl: ActionSheetController
  ) {}
  
    //async ionViewWillEnter(): Promise<void>
  async ngOnInit(): Promise<void> { 
  }

  async ionViewWillEnter(){
    const uid = this._activeRouter.snapshot.params['id'];
    this.proUser$ = this._userService.getByUid(uid);
    this.uid = (await this._auth.currentUser).uid;
    this.uidpro = uid;
    const check = (await this.isFollower().pipe(first()).toPromise()) === undefined? false: true;
    this._isFollower$.next(check);
    this.nbFollowers$ = this._userService.getCountFollowers(this.uidpro);
  }

  isFollower(){
    return this._userService.isFollower(this.uidpro, this.uid);
  }

  async follow(){  
    console.log();
    
    this._userService.setFollower(this.uidpro, this.uid);
    this._userService.setFollowing(this.uidpro, this.uid);
    this._isFollower$.next(true);
  }

  async presentActionFollow() {
    const actionSheet = await this._actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Notifications',
          icon: 'notifications-outline',
          handler: () => {
          },
        },
        {
          text: 'Unfollow',
          handler: async () => {
            this._isFollower$.next(false);
            this._userService.unfollow(this.uidpro, this.uid);
              },
        },
        {
          text: 'Logout',
          icon: 'log-out-outline',
          handler: () => {
            this._auth.signOut();
            this._router.navigate(['/login']);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  async presentActionContact() {
    const actionSheet = await this._actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: (await (this.proUser$.pipe(first()).toPromise()))?.email,
          icon: 'at-outline',
          handler: () => {
          },
        },
        {
          text: 'Phone number',
          handler: async () => {
              },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }
}

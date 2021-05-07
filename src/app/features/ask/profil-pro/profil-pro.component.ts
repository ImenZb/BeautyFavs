import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.scss'],
})
export class ProfilProComponent implements OnInit {
  proUser$;
  uid: string;
  isCardCollapse: number = 1;
  isAskingPro: boolean = false;
  constructor(
    private _activeRouter: ActivatedRoute,
    private _userService: UserService,
    private _auth: AngularFireAuth,
    private _router: Router
  ) {}
  
    //async ionViewWillEnter(): Promise<void>
  async ngOnInit(): Promise<void> { 
  }

  async ionViewWillEnter(){
    const uid = this._activeRouter.snapshot.params['id'];
    this.proUser$ = this._userService.getByUid(uid);
    this.uid = (await this._auth.currentUser).uid;
  }

  isFollower(uidpro){
    return this._userService.isFollower(uidpro, this.uid);
  }

  async follow(uidpro){  
    this._userService.setFollower(uidpro, this.uid);
    this._userService.setFollowing(uidpro, this.uid);
  }
}

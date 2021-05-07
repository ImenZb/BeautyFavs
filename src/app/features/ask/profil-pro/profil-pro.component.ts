import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.scss'],
})
export class ProfilProComponent implements OnInit {
  proUser$;
  uid: string;
  uidpro: string;
  isCardCollapse: number = 1;
  isAskingPro: boolean = false;
  private _isFollower$ = new BehaviorSubject(false);
  isFollower$ = this._isFollower$.asObservable();
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
    this.uidpro = uid;
    const check = (await this.isFollower().pipe(first()).toPromise()) === undefined? false: true;
    this._isFollower$.next(check);
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
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private _auth: AngularFireAuth, private _router: Router) { }
  async canLoad() {  
    const {uid = null} = await this._auth.currentUser;
        if (uid) {          
          return true;
        } else {          
          this._router.navigateByUrl('/login')
          return false;
        }
  }
}

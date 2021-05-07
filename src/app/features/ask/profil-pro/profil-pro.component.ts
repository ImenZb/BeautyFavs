import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.scss'],
})
export class ProfilProComponent implements OnInit {
  proUser$;
  isCardCollapse: number = 1;
  isAskingPro: boolean = false;
  constructor(
    private _activeRouter: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const uid = this._activeRouter.snapshot.params['id'];
    this.proUser$ = this._userService.getByUid(uid);
  }
}

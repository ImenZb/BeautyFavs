import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pro-account-modal',
  templateUrl: './pro-account-modal.component.html',
  styleUrls: ['./pro-account-modal.component.scss']
})
export class ProAccountModalComponent implements OnInit {
  user$: Observable<Partial<IUser>>;
  category: string;
  constructor(private _modalCtrl: ModalController,
    private _userService: UserService,
    private _auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  closeModal(){
    this._modalCtrl.dismiss();
  }

  async onClick(){
    const {uid = null} = await this.user$.pipe(first()).toPromise();
    this._userService.update(uid,{role: "pro"},this.category);
    this._modalCtrl.dismiss();
  }
}

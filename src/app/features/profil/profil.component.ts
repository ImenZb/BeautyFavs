import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController,
              private _auth: AngularFireAuth,
              private _router: Router) { }

  ngOnInit(): void {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
         {
        text: 'edit',
        icon: 'create-outline',
        handler: () => {
          console.log('edit clicked');
        }
      }, {
        text: 'logout',
        icon: 'log-out-outline',
        handler: () => {
          this._auth.signOut();
          this._router.navigate(['/login']);
          console.log('logout clicked');
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

  }
}

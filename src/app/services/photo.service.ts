import { Injectable } from '@angular/core';
import { IPhoto } from '../interfaces/photo';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos: IPhoto[] = [];
  avatarURL= null;

  constructor(private _storage: AngularFireStorage,
    private _auth: AngularFireAuth,
    private _af: AngularFirestore) { }

  async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    const imageUrl = capturedPhoto.webPath;
    this.avatarURL = imageUrl;
    this.photos.unshift({
      filePath: '',
      webPath: this.avatarURL
    });
  }

  async takePict() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.avatarURL = imageUrl;
  }

  async savePict() {
    const blob = await this._readAsBlob(this.avatarURL);
    const timeStamp = Date.now();
    const {uid = null} = await this._auth.currentUser;
    const ref = this._storage.ref(timeStamp + '_' + uid + '.jpeg');
    const task = ref.put(blob);
    await task.then();
    const url = await ref.getDownloadURL().toPromise();
    //update user info in firestore
    this._af.doc('users/'+ uid).update({photoUrl: url});
    
  }

  private async _readAsBlob(webPath: string) {
    // Fetch the file and read as a blob
    const response = await fetch(webPath);
    const blob = await response.blob();
    return blob;
  }
  
  
}

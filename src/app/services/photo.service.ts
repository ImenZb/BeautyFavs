import { Injectable } from '@angular/core';
import { IPhoto } from '../interfaces/photo';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos: IPhoto[] = [];
  
  constructor() { }

  async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
  
    this.photos.unshift({
      filePath: "soon...",
      webPath: capturedPhoto.webPath
    });
  }

  
  
}

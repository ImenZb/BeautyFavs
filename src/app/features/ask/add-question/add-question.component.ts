import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IPhoto } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { QuestionService } from 'src/app/services/question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  textQuestion: string;
  selectedTag: string;
  imageUrl:string;
  photos: IPhoto[];
  tags: string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  items: string[]=[];
  categories: string[] = [];
  
  @ViewChildren("img") imgs: QueryList<any>;
  constructor(private _photoService: PhotoService,
    private _auth: AngularFireAuth,
    private _questionService: QuestionService,
    private _router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    
  }

  /**
    Autocomplete input for tags
  */
  
  
    inputChanged($event){
      const value = $event.target.value;
      if(value.length <=0){
        this.items = [];
        return;
      }
      this.items = this.tags.filter(element => element.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }
    selected(item, input){
      input.value = '';
      this.selectedTag = item;
      this.items = [];
    }
    
    /**
     * Checkboxes
     */
    addCategory($event){
      const category = $event.detail.value;
      const isChecked = $event.detail.checked;
      if(this.categories?.find(element => element === category) !== undefined || !isChecked){
        this.categories = this.categories.filter(element => element !== category);
        return;
      };
      this.categories.push(category);
    }

    /**
     * image from camera plugin
     */
  delete(index: number){
    console.log('photos before delete', this.photos);
    console.log('service photos before delete', this._photoService.photos);
    if(index === 0){
      this.photos.shift();
      this._photoService.photos.shift();
    }else{
      this.photos = this.photos.splice(index, 1);
      this._photoService.photos = this._photoService.photos.splice(index, 1);
    }
    this.imgs.toArray()[0].el.style.display = 'none';
    console.log('index', index);
    
    console.log('photos after delete', this.photos);
    console.log('service photos after delete', this._photoService.photos);
  }
  async addImageUrl(){
    await this._photoService.addNewToGallery();
    this.photos = this._photoService.photos;
    console.log('--->',this.photos);
    
  }

  async onClick(){
    const {uid = null} = await this._auth.currentUser;
    const photosURL = await this._photoService.getGaleryURL();
    /*console.log('photosURL',photosURL);
    
    //ToDo add userID in the response
    console.log('question to add in firebase ',
    {uid,tag:this.selectedTag,categories:this.categories,text:this.textQuestion, photosURL});*/
    if(!this.selectedTag || this.categories.length < 0 || this.textQuestion === '' || this.photos.length < 0){
      this.showAlert();
    }else{
      this._questionService.addQuestion({uid,tag:this.selectedTag,categories:this.categories,text:this.textQuestion, photosURL, date: new Date()});
      this.photos = [];
      this._photoService.photos = [];
      this._router.navigate(['ask']);
      
    }
  
  }

  showAlert() {
    this.alertController.create({
      header: 'Alert',
      subHeader: 'Question form not completed',
      message: 'Please fill all fields',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }
}

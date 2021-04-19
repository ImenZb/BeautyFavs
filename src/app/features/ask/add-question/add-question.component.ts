import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';


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
  
  constructor(private _photoService: PhotoService) { }

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
  async saveImageUrl(){
    await this._photoService.addNewToGallery();
    this.photos = this._photoService.photos;
  }
  onClick(){
    //ToDo add userID in the response
    console.log('question to add in firebase ',{tag:this.selectedTag,categories:this.categories,text:this.textQuestion, imageUrl:this.imageUrl});
  }
}

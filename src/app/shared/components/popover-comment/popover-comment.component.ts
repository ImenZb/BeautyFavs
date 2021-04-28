import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PopoverController } from '@ionic/angular';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-popover-comment',
  templateUrl: './popover-comment.component.html',
  styleUrls: ['./popover-comment.component.scss']
})
export class PopoverCommentComponent implements OnInit {
  @Input() product: IProduit; //product related to the post
  @Input() user$: IUser; // connected user
 
  constructor(private popoverController: PopoverController,
              private serviceProduit: ProductService,
              private _auth: AngularFireAuth,
              private _postService: PostService) { }

  ngOnInit(): void {
  }

  //clicked smiley
  getSmiley(event){
    return(event.srcElement.innerText)
  }

  //save comment in DB and close popover
  async sendComment(input){
    //prepare data
    const {uid = null} = await this._auth.currentUser;
    const data = {
      uid,
      productId: this.product.id, 
      body: input.value
    }
    //save data
    this._postService.save(data);
    //close popover
    this.popoverController.dismiss();
  }

  ClosePopover() {
    this.popoverController.dismiss();
  }

}

import { Component, Input, OnInit } from '@angular/core';
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
  @Input() user: IUser; // connected user
  constructor(private popoverController: PopoverController,
              private serviceProduit: ProductService,
              private servicePost: PostService) { }

  ngOnInit(): void {
  }

  //clicked smiley
  getSmiley(event){
    return(event.srcElement.innerText)
  }

  //save comment in DB and close popover
  async sendComment(input){
    let latestPostId = this.product.feed[this.product.feed.length - 1].postId;
    this.product.feed.push({postId: latestPostId + 1, body: input.value});
    await this.serviceProduit.update(this.product).toPromise();
    await this.servicePost.create({
                                username: this.user.username,
                                productName: this.product.product_name, 
                                body: input.value,
                                date: new Date()
                              }).toPromise();
    this.popoverController.dismiss();
  }

  //add post to firebase
  
  ClosePopover() {
    this.popoverController.dismiss();
  }

}

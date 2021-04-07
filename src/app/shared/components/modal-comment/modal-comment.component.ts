import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/post';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { PopoverCommentComponent } from '../popover-comment/popover-comment.component';

@Component({
  selector: 'app-modal-comment',
  templateUrl: './modal-comment.component.html',
  styleUrls: ['./modal-comment.component.scss']
})
export class ModalCommentComponent implements OnInit,AfterViewInit {
  produitFeed: [{postId:number,body:string}];
  user:IUser;
  produit:IProduit;
  postList:any[]=[];
  @ViewChild('content',{static:true,read:ElementRef}) ionContent:ElementRef<HTMLIonContentElement>;

  constructor(private servicePost: PostService,
              private serviceUser: UserService,
              public modalController: ModalController,
              public popoverController: PopoverController) { }

  ngOnInit(): void {
      
      
  }

  async ngAfterViewInit():Promise<void>{
    await Promise.all(this.produitFeed.map(async (element) => {
      const data = await this.get(element.postId).toPromise();
      this.postList.push(data);
      return element;
    })); 
    setTimeout(() => {
      this.ionContent.nativeElement.scrollToBottom(250);
    }, 100);
  }


  get(postId){
    return forkJoin([this.servicePost.getById(postId),
                this.serviceUser.get()])
      .pipe(
        map(([post,users]) => {
          return {body:post.body, ...users.find(user => user.username === post.username)}
        }
        )
      )
  }


  closeModal() {
    this.modalController.dismiss();
  }

  async presentPopover(ev: any,product) {
    const popover = await this.popoverController.create({
      component: PopoverCommentComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
      showBackdrop: false,
      componentProps: {
        "product": product,
        "user": this.user
      }
    });
    return await popover.present();
  }


}

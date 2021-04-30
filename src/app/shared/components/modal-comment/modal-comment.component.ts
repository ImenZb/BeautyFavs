import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
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
  user$:IUser;
  produit:IProduit;
  @ViewChild('content',{static:true,read:ElementRef}) ionContent:ElementRef<HTMLIonContentElement>;
  posts$: Observable<any>;
  constructor(private _postService: PostService,
              private serviceUser: UserService,
              public modalController: ModalController) { }

  ngOnInit(): void {}

  ngAfterViewInit():void{
    this.posts$ = this._postService.getPostsByProduct(this.produit.id).pipe(tap(posts => console.log('posts',posts)
    ));

    setTimeout(() => {
      this.ionContent.nativeElement.scrollToBottom(250);
    }, 100);
  }


  closeModal() {
    this.modalController.dismiss();
  }

  


}

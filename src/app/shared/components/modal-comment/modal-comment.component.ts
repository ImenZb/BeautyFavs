import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/post';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';



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
              public modalController: ModalController,
              public af:AngularFirestore) { }

  async ngOnInit(): Promise<void> {
    const test = await this.af.collection('users').valueChanges().pipe().toPromise();
  }

  ngAfterViewInit():void{
    this.posts$ = this._postService.getPostsByProduct(this.produit.id);

    setTimeout(() => {
      this.ionContent.nativeElement.scrollToBottom(250);
    }, 100);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  


}

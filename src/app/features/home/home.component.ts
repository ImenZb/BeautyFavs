import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { IProduit } from 'src/app/interfaces/produit';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  products: Observable<IProduit[]>;
  post: Observable<any>;

  constructor(private serviceProduct: ProductService,
              private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.products = this.serviceProduct.getAll();
  }

}

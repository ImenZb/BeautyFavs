import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IUser } from 'src/app/interfaces/user';
import { ProductService } from 'src/app/servicesFirebase/product.service';
import { tap } from 'rxjs/operators';
import { PostService } from 'src/app/servicesFirebase/post.service';
import { Produit } from 'src/app/interfaces/produit';
import { PostsPerProductService } from 'src/app/servicesFirebase/posts-per-product.service';

@Component({
  selector: 'app-modal-add',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  @Input() productName:string;
  @Input() productImg:string;
  tags:string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  form: FormGroup;
  user: IUser;
  items:string[]=[];
  constructor(public modatCtrl:ModalController,
              private formBuilder: FormBuilder,
              private serviceProduitFB: ProductService,
              private servicePost: PostService,
              private servicePostsProduct: PostsPerProductService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product_name: [this.productName,Validators.required],
      feed: ['',Validators.required],
      brand: ['',Validators.required],
      tag: ['',Validators.required],
      category: ['',Validators.required]
    });
  }

  inputChanged($event){
    const value = $event.target.value;
    if(value.length <=0){
      this.items = [];
      return;
    }
    this.items = this.tags.filter(element => element.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  }

  selected(item, input){
    input.value = '';
    this.form.patchValue({tag:item});
    this.items = [];
  }

  onSubmit(){
    let keyPost;
    let KeyProduct;
    const product = {...this.form.value, created_datetime: Date.now(), username:this.user?.username || '',
                    imageUrl:this.productImg, likes:0};
    const post = {username:this.user?.username || '',
                  body:product.feed,
                  date:product.created_datetime}
    //Products: add product
    this.serviceProduitFB.create(product).then(data => {
      KeyProduct = data.path.pieces_[1];
      //Posts: add post with the product id
        this.servicePost.create({...post,productId: KeyProduct}).then(data =>{
          //PostsPerProduct: add post key as child of product key
          keyPost = data.path.pieces_[1];
          this.servicePostsProduct.create(KeyProduct, keyPost);
        })
    });
    this.modatCtrl.dismiss();
  }
}

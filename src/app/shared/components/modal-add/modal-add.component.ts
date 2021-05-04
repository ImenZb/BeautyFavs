import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IUser } from 'src/app/interfaces/user';
import { ProductService } from 'src/app/servicesFirebase/product.service';
import { IProduit, Produit } from 'src/app/interfaces/produit';
import { ProductListService } from 'src/app/services/product-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PostService } from 'src/app/services/post.service';
import { unescapeIdentifier } from '@angular/compiler';
import { AngularFirestore } from '@angular/fire/firestore';

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
  user;
  items:string[]=[];
  constructor(public modatCtrl:ModalController,
              private _formBuilder: FormBuilder,
              private _productListService: ProductListService,
              private _postService: PostService,
              private _auth: AngularFireAuth,
              private _af: AngularFirestore) { }

  async ngOnInit(): Promise<void> {
    this.form = this._formBuilder.group({
      product_name: [this.productName,Validators.required],
      feed: ['',Validators.required],
      brand: ['',Validators.required],
      tag: ['',Validators.required],
      category: ['',Validators.required]
    });
    this.user = await this._auth.currentUser;
   
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
    const id = this._af.createId();
    //const productId = Math.floor(Math.random()*1000).toString() + 'n';
    const feed = this.form.get('feed').value;
    const product_name = this.form.get('product_name').value;
    const tag = this.form.get('tag').value;
    const category = this.form.get('category').value;
    const brand = this.form.get('brand').value;
    const date: Date = new Date();
    const product:IProduit = {id, product_name, brand, tag, category, created_datetime: date,
      image_url:this.productImg, likes:0};
    const uid:string = this.user?.uid;
    const post = {uid,
                  productId:id,
                  body:feed,
                  date}
    this._productListService.create(product);
    this._postService.save(post);
    this.modatCtrl.dismiss();
  }
}

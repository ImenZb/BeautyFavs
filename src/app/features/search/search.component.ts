import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { GoogleService } from 'src/app/services/google.service';
import { map, filter, first, tap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ModalAddComponent } from 'src/app/shared/components/modal-add/modal-add.component';
import { ProductService } from 'src/app/services/product.service';
import { IProduit } from 'src/app/interfaces/produit';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { ProductListService } from 'src/app/services/product-list.service';
import { BrowserStack } from 'protractor/built/driverProviders';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query:string = '';
  results: Observable<any[]> ;
  resultsGoogle: Observable<any[]> ;
  resultsLocal: Observable<IProduit[]> ;
  isKeyEntered: boolean = false;

  constructor(private serviceGoogle : GoogleService,
              private serviceProduit: ProductService,
              private _productListService: ProductListService,
              public modalCtrl: ModalController) { }

  ngOnInit(): void { 
     // this.results = this.serviceGoogle.getAll(this.query);
  }

  filterList($event){
   this.query = $event.srcElement.value;
   this.isKeyEntered = true;
   
   this.resultsGoogle = this.getGoogle();
   this.resultsLocal = this.getLocal();
  }


  getGoogle(): Observable<any[]>{
    return forkJoin([
      this.serviceGoogle.getAll(this.query),
      this._productListService.productList$.pipe(first())
    ]).pipe(
      map(([produitsGoogle, produits]) =>{
        let resultGoogle:any[]=[];
        [...produitsGoogle.items].forEach(produitGoogle => {
          for (let index = 0; index < produits.length; index++) {
            const produit = produits[index];
            const titleGoogle = produitGoogle.title.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            const titleLocal = produit.product_name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if(!titleGoogle.includes(titleLocal)){
              resultGoogle.push(produitGoogle);
            }
          }
        });
        return [...new Set(resultGoogle)];
      })
    )
  }

  getLocal(): Observable<IProduit[]>{
    return forkJoin([
      this.serviceGoogle.getAll(this.query),
      this._productListService.productList$.pipe(first())
    ]).pipe(
      map(([produitsGoogle, produits]) =>{
        let resultLocal:any[]=[];
        [...produitsGoogle.items].forEach(produitGoogle => {
          for (let index = 0; index < produits.length; index++) {
            const produit = produits[index];
            const titleGoogle = produitGoogle.title.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            const titleLocal = produit.product_name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            titleGoogle.split('').for
            if(titleGoogle.includes(titleLocal)){
              resultLocal.push(produit);
            }
          }
        });
        return [...new Set(resultLocal)];
      })
    )
  }
  async openModal(result) {
    const ionModal = await this.modalCtrl.create({
      component: ModalAddComponent,
      componentProps: {
        'productName': result.title,
        'productImg': result.pagemap.cse_thumbnail[0].src || '../../../assets/images/home1.jpg'
      }
    });
    await ionModal.present();
  }

  isMatched(searchTerm:string,name:string){
    let words = searchTerm.split(' ');
    let isMatched = false;
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      isMatched = name.includes(word);
      if(isMatched)break;
    }
    return isMatched;
  }

}

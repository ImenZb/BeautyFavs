import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { GoogleService } from 'src/app/services/google.service';
import { map, filter } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ModalAddComponent } from 'src/app/shared/components/modal-add/modal-add.component';
import { ProductService } from 'src/app/services/product.service';
import { IProduit } from 'src/app/interfaces/produit';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';


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
              public modalCtrl: ModalController) { }

  ngOnInit(): void { 
     // this.results = this.serviceGoogle.getAll(this.query);
  }

  filterList($event){
   this.query = $event.srcElement.value;
   this.isKeyEntered = true;
   // this.results = this.serviceGoogle.getAll(this.query);
   this.resultsGoogle = this.getGoogle();
   this.resultsLocal = this.getLocal();
  }


  getGoogle(): Observable<any[]>{
    return forkJoin([
      this.serviceGoogle.getAll(this.query),
      this.serviceProduit.getAll()
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
      this.serviceProduit.getAll()
    ]).pipe(
      map(([produitsGoogle, produits]) =>{
        let resultLocal:any[]=[];
        [...produitsGoogle.items].forEach(produitGoogle => {
          for (let index = 0; index < produits.length; index++) {
            const produit = produits[index];
            const titleGoogle = produitGoogle.title.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            const titleLocal = produit.product_name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
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


}

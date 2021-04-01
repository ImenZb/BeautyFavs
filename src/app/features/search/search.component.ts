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

  constructor(private serviceGoogle : GoogleService,
              private serviceProduit: ProductService,
              public modalCtrl: ModalController) { }

  ngOnInit(): void { 
     // this.results = this.serviceGoogle.getAll(this.query);
  }

  filterList($event){
    this.query = $event.srcElement.value;
    this.results = this.serviceGoogle.getAll(this.query);
  }
/*
  get(): Observable<Article[]> {
    return forkJoin(
      this.getArticles(),         // la requête http qui récupère la liste des articles
      this.getAuthorOfTheMonth()  // celle qui récupère l'auteur du mois
    ).pipe(
      map(([articles, authorOfTheMonth]) =>
        // le filtre qui exclut les articles qui ne sont pas de cet auteur
        articles.filter(article => article['author'] === authorOfTheMonth['name'])
      )
    )
  }*/


  async openModal(result) {
    const ionModal = await this.modalCtrl.create({
      component: ModalAddComponent,
      componentProps: {
        'productName': result.title
      }
    });
    await ionModal.present();
  }

}

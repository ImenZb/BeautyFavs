import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduit } from 'src/app/interfaces/produit';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() produit:IProduit;
  item: Observable<IProduit>;
  id:string;
  constructor(private serviceProduit: ProductService,
              private routerA: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerA.snapshot.params['id'];
    this.item = this.serviceProduit.getById(this.id);
  }

}

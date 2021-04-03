import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(public modatCtrl:ModalController,
              private formBuilder: FormBuilder,
              private serviceProduit: ProductService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product_name: [this.productName,Validators.required],
      feed: ['',Validators.required],
      brand: [''],
      tag: [''],
      category: ['']
    });
  }

  async onSubmit(){
    console.log('form value',this.form.value);
    await this.serviceProduit.create(this.form.value);
    this.modatCtrl.dismiss();
  }
}

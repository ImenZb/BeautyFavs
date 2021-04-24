import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;
import { INTRO_KEY } from 'src/app/guards/intro.guard';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.slides.slideNext();
  }
 
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeolocateService } from 'src/app/services/geolocate.service';

@Component({
  selector: 'app-geolocate',
  templateUrl: './geolocate.component.html',
  styleUrls: ['./geolocate.component.scss']
})
export class GeolocateComponent implements OnInit {
  isclicked: boolean = false;
  location: Promise<{town,state}>;
  @Output() locationEmitternew = new EventEmitter<any>();
  @Output() initEmitter = new EventEmitter<boolean>();
  constructor(private _geoservice: GeolocateService) { }

  ngOnInit(): void {
  }

 async  onClick(){
    this.location = this._geoservice.geolocateMe();
    this.isclicked = true;
    const location = await this.location;
    this.locationEmitternew.emit(location);
  }

  init(){
    this.isclicked = false;
    this.initEmitter.emit(this.isclicked);
  }
}

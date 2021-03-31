import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleService } from 'src/app/services/google.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results ;
  constructor(private serviceGoogle : GoogleService) { }

  ngOnInit(): void {
   this.serviceGoogle.getAll('acne').subscribe(
     (data => console.log(data))
   )
  }

}

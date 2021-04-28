import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { FavService } from '../services/fav.service';

@Pipe({
  name: 'favInit'
})
export class FavInitPipe implements PipeTransform {
  constructor(private _favService: FavService){}
  transform(id: string): Observable<boolean> {
    return this._favService.isFav$(id);
  }

}

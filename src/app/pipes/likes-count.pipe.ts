import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { LikeService } from '../services/like.service';

@Pipe({
  name: 'likesCount'
})
export class LikesCountPipe implements PipeTransform {
  constructor(private _likeService: LikeService){}
  transform(id: string): Observable<number> {
    return this._likeService.getCount(id);
  }

}

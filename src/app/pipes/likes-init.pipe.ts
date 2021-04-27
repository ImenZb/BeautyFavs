import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { LikeService } from '../services/like.service';

@Pipe({
  name: 'likesInit'
})
export class LikesInitPipe implements PipeTransform {
  constructor(private _likeService: LikeService){}
  transform(id: string): Observable<boolean> {
    return this._likeService.isLiked(id);
  }

}

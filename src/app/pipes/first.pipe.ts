import { Pipe, PipeTransform } from '@angular/core';
import { PostService } from '../services/post.service';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {
  constructor(private _postService: PostService){}
  transform(value: string) {
    return this._postService.getFirstPostsByProduct(value);
  }

}

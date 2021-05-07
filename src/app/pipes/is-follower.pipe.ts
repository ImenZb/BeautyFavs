import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'isFollower'
})
export class IsFollowerPipe implements PipeTransform {
  constructor(private _userService: UserService){}
  transform(uidpro: string, uid: string){
    if(!uidpro || !uid)return false;
    return this._userService.isFollower(uidpro, uid);
  }

}

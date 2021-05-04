import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {
  constructor(private _userService: UserService){}
  async transform(uid: string){
    const {username = null} = await this._userService.getByUid(uid).pipe(first()).toPromise();
    return username;
  }

}

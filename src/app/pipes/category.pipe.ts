import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  constructor(private _AF: AngularFirestore) {}
  async transform(id: string) {
    const result = await this._AF
      .doc<{ category: string; id: string }>('pro-categories/' + id)
      .valueChanges()
      .pipe(first())
      .toPromise();
    return result.category;
  }
}

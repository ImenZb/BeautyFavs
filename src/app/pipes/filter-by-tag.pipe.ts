import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(questionsList, tag: string) {
    if(questionsList){
      return questionsList.filter(question => question.tag === tag);
    }else{
      return [];
    } 
  }

}

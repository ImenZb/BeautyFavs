import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  proUsers = [{username:'Bret',imageUrl:'1.jpg'},
              {username:'Antonette',imageUrl:'2.jpg'},
              {username:'Samantha',imageUrl:'3.jpg'},
              {username:'Karianne',imageUrl:'4.jpg'},
              {username:'Kamren',imageUrl:'5.jpg'}];
  constructor(private _questionService: QuestionService) { }
  questions$;
  ngOnInit(): void {
    this.questions$ = this._questionService.getAllOrderedByTags();
  }

  

}

import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

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
  proUsers$;
  constructor(private _questionService: QuestionService,
    private _userService: UserService) { }
  questions$;
  tags: string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  ngOnInit(): void {
    this.questions$ = this._questionService.getAllOrderedByTags();
    this.proUsers$ = this._userService.getAllPro();
  }

  

}

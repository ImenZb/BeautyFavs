import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  proUsers$;
  proUsersNearBy$;
  nearbyClicked : boolean;
  constructor(private _questionService: QuestionService,
    private _userService: UserService,
    private _router: Router) { }
  questions$;
  tags: string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  ngOnInit(): void {
    this.questions$ = this._questionService.getAllOrderedByTags();
    this.proUsers$ = this._userService.getAllPro();
    this.nearbyClicked = false;
  }

  onClick(uid: string){
    this._router.navigate(['ask/pro/' + uid]);
  }

  getTown(location){
    this.nearbyClicked = true;
    const state = location.state;
    this.proUsersNearBy$ = this._userService.getProListNearby(state); 
  }

  initGeoLocation(isclicked){
    this.nearbyClicked = isclicked;
  }
}

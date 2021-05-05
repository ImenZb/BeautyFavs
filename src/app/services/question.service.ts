import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _af: AngularFirestore) { }

  addQuestion(question){
    const id = this._af.createId();
    this._af.doc('questions/' + id).set({...question,id});
  }

  getAllOrderedByTags(){
    return this._af.collection('questions', ref => ref.orderBy('tag', 'desc')).valueChanges();
  }

  
}

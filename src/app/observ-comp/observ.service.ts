import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservService {

  private subject = new Subject();
  private behaviouSubject = new BehaviorSubject('Initial Behaviour Subject');
  private replaySubject = new ReplaySubject(2);

  subjectData = this.subject.asObservable();
  behaviourSubjectData = this.behaviouSubject.asObservable();
  replaySubjectData = this.replaySubject.asObservable();

  constructor( private http:HttpClient ) { }

  sendToSubjectData(){
    const updatedValu = `Subject Test Data ${new Date()}`;
    this.subject.next(updatedValu)
  }

  sendToBehaviourSubject(){
    const updatedValu = `Behaviour Subject Test Data ${new Date()}`;
    this.behaviouSubject.next(updatedValu)
  }

  sendToReplaySubject(){
    const updatedValu = `Replay Subject Test Data ${new Date()}`;
    this.replaySubject.next(updatedValu)
  }


}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ObservService} from './observ.service';

@Component({
  selector: 'app-observ-comp',
  templateUrl: './observ-comp.component.html'
})
export class ObservCompComponent implements OnInit {

  subjectData:any = [];
  behaviourSubjectData:any = [];
  replaySubjectData:any = [];

  private subjectSubscription! : Subscription;
  private behaviourSubjectSubscription! : Subscription;
  private replaySubjectSubscription! : Subscription;

  constructor(private observService:ObservService) { }

  ngOnInit(): void {
  }

  updateSubjectObservabel(){
    this.observService.sendToSubjectData()
  }

  updateBehaviourSubjectObservabel(){
    this.observService.sendToBehaviourSubject()
  }

  updateReplaySubjectObservabel(){
    this.observService.sendToReplaySubject()
  }


  subscribeData(){
    this.subjectSubscription = this.observService.subjectData.subscribe(data => {
      this.subjectData.push(data);
    })
    this.behaviourSubjectSubscription = this.observService.behaviourSubjectData.subscribe(data => {
      this.behaviourSubjectData.push(data)
    })
    this.replaySubjectSubscription = this.observService.replaySubjectData.subscribe(data => {
      this.replaySubjectData.push(data);
    })
  }

  unSubscribeData(){
    if(this.subjectSubscription){
      this.subjectSubscription.unsubscribe()
    }
    if(this.behaviourSubjectSubscription){
      this.behaviourSubjectSubscription.unsubscribe()
    }
    if(this.replaySubjectSubscription){
      this.replaySubjectSubscription.unsubscribe()
    }
  }

  ngOnDestroy(){
    this.unSubscribeData();
  }

}

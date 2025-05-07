import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratingVal:any = 0;
  // stars:any = [1, 2, 3, 4, 5];
  // hoverStar = -1;
  // selectedStar = 0;

  constructor() { }

  ngOnInit(): void {
  }

  giveRating(star:any){
    this.ratingVal = star;
  }

  // onHover(i:any){
  //   this.hoverStar = i
  // }
  // onLeave(){
  //   this.hoverStar = -1;
  // }
  // onSelect(i:any){
  //   this.selectedStar = i+1;
  // }

}

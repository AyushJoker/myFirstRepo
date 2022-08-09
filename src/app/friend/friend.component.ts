import { Component, OnInit } from '@angular/core';
import { FriendData } from '../models/friendData';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
friend:string[]=['bullf','ffdgd','dgdffd','dfgd'];
friends:FriendData[]=[
  {Name:'Ayush',Contact:'9999789999',Email:'ayushjoker9@gmail.com',Photo:'/assets/images/image1.jpg'},
  {Name:'Gyush',Contact:'8995699499',Email:'ayushjoker9@gmail.com',Photo:'/assets/images/image2.jpg'},
  {Name:'Kyush',Contact:'6999999799',Email:'ayushjoker9@gmail.com',Photo:'/assets/images/image3.jpg'},
  {Name:'Ajush',Contact:'7999629999',Email:'ayushjoker9@gmail.com',Photo:'/assets/images/image4.jpg'},
  {Name:'Rhush',Contact:'6992359999',Email:'ayushjoker9@gmail.com',Photo:'/assets/images/image5.jpg'},
]
  constructor() { }

  ngOnInit(): void {
  }
}

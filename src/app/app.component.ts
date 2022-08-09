import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProj';
  firstname:string="Ayush";
  Role:string="Dot Net Student";
  Salary:Number=4500;
  Today:Date=new Date();
}

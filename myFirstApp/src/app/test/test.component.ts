import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
    Welcome {{name}} We Missed you !
  </h1>
  <button (click)="onClick($event)">Hi</button><br>
  {{greeting}}

  <input [(ngModel)]="name" type="text">
  {{name}}

  <input type="text" value="danish" [id]=myId>
  <input type="text" value="danish" [id]=myId2 [disabled]="disabled">
  <h2 class="text-success">Danish is awesome</h2>
  <h2 [class]="successClass" class="text-failure">Danish is awesome</h2>
  <h1 [class.text-failure]="hasError">Has Error ?</h1>
  <h2 [ngClass]="messageClasses">DANISH WITH MULTIPLE CLASS BINDINGS</h2>
  <h1 [style.color]="'orange'">Style binding</h1>
  <h1 [style.color]="hasError ? 'red' : 'blue'">Style binding</h1> 
  <h1 [ngStyle]="titleStyles">Style binding 3</h1> 
  <input #input1 type="text">waaaaa
  <button (click)="onClick2(input1.value)">LOG</button>
   `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-failure {
    color: red;
  }
  .text-special {
    font-style: italic;

  }
  `]
})
export class TestComponent implements OnInit {
  public name = "Danish";
  public myId = "testID";
  public myId2 = "testID2";
  public disabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = false;
  public greeting="";
  public titleStyles = {
    color : "brown",
    fontStyle : "italic"
  }
  public messageClasses = {
    "text-success":!this.hasError,
    "text-failure": this.hasError,
    "text-special": this.isSpecial
  }

  showName(){
    return "Hello " + this.name;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    console.log(e);
    this.greeting="Hello from Danish";
  }

  onClick2(b) {
    console.log(b);
  }

}

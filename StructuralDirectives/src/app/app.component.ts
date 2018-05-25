import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}-Component</h1>

  <h2 *ngIf="display; else elseBlock">Danish</h2>
  <hr>
  <button (click)="onClick()">Reveal</button>
  <hr>
  <button (click)="onClickHide()">Hide</button>
  <hr>
  <input [(ngModel)]="userInput" type="text">
  {{userInput}}
  <button (click)="logName()">log</button>

<ng-template #elseBlock>
  <h2>Click to reveal Name</h2>
</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display=false;
  userInput="danish"
  title = 'app';

  logName()
  {
    console.log(this.userInput);
  }

  onClick()
  {
    this.display=true;
  }
  onClickHide()
  {
    this.display=false;
  }
}

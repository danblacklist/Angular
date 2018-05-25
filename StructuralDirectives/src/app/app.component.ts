import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display=false;
  color="";
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

  onRed(event)
  {
    this.color="red";
  }
  onBlue(event)
  {
    this.color="blue";
  }
  onGreen(event)
  {
    this.color="green";
  }
}

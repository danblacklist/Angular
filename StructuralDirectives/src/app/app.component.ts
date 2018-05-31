import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  color="";
  userInput="danish"
  title = 'app';
  public name = "Component Interaction P2C";
  public message = "";

    display: boolean = false;
    displayFlag: boolean = false;
    displayNumberFlag: boolean = false;
    displayDateFlag: boolean = false;
    public date=new Date();
    showDialog() {
        this.displayFlag = true;
    }

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
  displayNumber(){
    this.displayNumberFlag=true;
  }
  displayDate(){
    this.displayDateFlag=true;
  }
}

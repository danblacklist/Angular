import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-furniture-details',
  template: `
    <h2>HomeDetails</h2>
    <h5> You selected id = {{hfId}}</h5>

    
  `,
  styles: []
})
export class HomeFurnitureDetailsComponent implements OnInit {

  public hfId;

  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.ar.snapshot.paramMap.get('id'));
    this.hfId=id;
  }

}

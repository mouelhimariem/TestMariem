import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Mari-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
@Input() libelle:string ;
@Input() img: string ;
@Input() price : number ;
@Input() prom : boolean ;
@Input() date : Date ; 





 

  constructor() { }

  ngOnInit(): void {
  }

}

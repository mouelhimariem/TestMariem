import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Mari-listmeubles',
  templateUrl: './listmeubles.component.html',
  styleUrls: ['./listmeubles.component.css']
})
export class ListmeublesComponent implements OnInit {
  Date=new Date();
  meubles:Meuble[]= [
    {libelle:'table', img:'assets/Meubles/table.jpg', prixTTC: 47, promo:true, dateFab:new Date(2020,5,12)},
    {libelle:'armoire', img:'assets/Meubles/armoire.jpg', prixTTC: 258.5, promo: false,dateFab:new Date(2020,10,12)},
    {libelle:'commode', img:'assets/Meubles/commode.png', prixTTC: 780.8, promo:true, dateFab:new Date(2020,11,30)},
      ];
  constructor() { }

  ngOnInit(): void {
  }

}

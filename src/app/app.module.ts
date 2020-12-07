import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MeubleComponent } from './myClass/meuble/meuble.component';
import { ListmeublesComponent } from './compos/listmeubles/listmeubles.component';

@NgModule({
  declarations: [
    AppComponent,
    MeubleComponent,
    ListmeublesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

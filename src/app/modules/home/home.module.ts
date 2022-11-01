import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { InfoCardComponent } from 'src/app/components/info-card/info-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HomeComponent, InfoCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

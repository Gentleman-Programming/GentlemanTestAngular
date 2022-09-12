import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleTableComponent } from 'src/app/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PeopleTableComponent]
})
export class HomeModule {}

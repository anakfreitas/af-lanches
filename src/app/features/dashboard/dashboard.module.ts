import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';



@NgModule({
  declarations: [DashboardComponent, ChartsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }

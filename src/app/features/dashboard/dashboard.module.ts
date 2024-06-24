import { NgModule } from '@angular/core';
import { ChartsComponent } from './components/charts/charts.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent, ChartsComponent],
  imports: [SharedModule],
})
export class DashboardModule {}

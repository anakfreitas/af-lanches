import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export type SnackbarData = {
  text: string;
  icon?: string;
};

@Component({
  standalone: true,
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [CommonModule, MatIconModule],
})
export class SnackbarComponent {
  data: SnackbarData;

  constructor(private injector: Injector) {
    this.data = this.injector.get(MAT_SNACK_BAR_DATA) ?? {};
  }
}

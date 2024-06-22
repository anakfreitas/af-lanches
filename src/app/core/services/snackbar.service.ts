import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  SnackbarComponent,
  SnackbarData,
} from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  open(
    text: string,
    args?: {
      type?: 'default' | 'error' | 'success';
      duration?: number;
      verticalPosition?: MatSnackBarVerticalPosition;
    } & Omit<SnackbarData, 'text'>
  ) {
    this.snack.openFromComponent(SnackbarComponent, {
      panelClass: 'snackbar_' + (args?.type ?? 'default'),
      duration: args?.duration ?? 2000,
      data: {
        text: text,
        icon: args?.icon,
      } as SnackbarData,
      verticalPosition: args?.verticalPosition ?? 'bottom',
    });
  }
}

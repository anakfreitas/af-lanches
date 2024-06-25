import { Component, Input } from '@angular/core';
import { ProductNoteComponent } from '../reviews/product-note/product-note.component';
import { Product } from '../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/snackbar.service';

@Component({
  selector: 'app-evaluate-product-button',
  templateUrl: './evaluate-product-button.component.html',
  styleUrls: ['./evaluate-product-button.component.scss'],
})
export class EvaluateProductButtonComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog, private snackbarService: SnackbarService) {}

  public openModal() {
    const data = {
      productId: this.product.id,
      productName: this.product.title,
      name: 'User Teste',
    };
    const dialogRef = this.dialog.open(ProductNoteComponent, {
      width: '300px',
      height: '150px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((success) => {
      if(success){
        this.snackbarService.open('Produto avaliado com sucesso!')
      }
    })
  }
}

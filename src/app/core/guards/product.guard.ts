import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { AppService } from '../services/app.service';

export const productGuard: CanActivateFn = () => {
  const productService = inject(ProductService);
  const appService = inject(AppService);

  appService.setLoadingState(true);
  const productsObservable = productService.allProducts.pipe(
    map(() => {
      appService.setLoadingState(false);
      return true;
    })
  );

  return productsObservable;
};

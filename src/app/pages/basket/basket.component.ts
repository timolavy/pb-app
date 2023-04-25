import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BehaviorSubject, Observable, combineLatestWith, map } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

import { BasketItem } from '@resources/basket/basket.model'
import { BasketService } from '@resources/basket/basket.service'
import { environment } from '@env/environment'

@Component({
  selector: 'pb-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
  env = environment
  deliveryPrice: number = 5
  
  savedProducts$: BehaviorSubject<BasketItem[]> = this.basketService.products$
  totalHT$: Observable<number> = this.savedProducts$.pipe(
    map(products => products.map(product => product.format.price * product.quantity).reduce((acc, val) => acc + val, 0)),
  )
  applyDiscount$: Observable<boolean> = this.totalHT$.pipe(map(totalHT => totalHT >= 200))
  total$: Observable<number> = this.totalHT$.pipe(
    combineLatestWith(this.applyDiscount$),
    map(([totalHT, applyDiscount]) => applyDiscount ? totalHT : totalHT + this.deliveryPrice),
  )

  constructor(
    private basketService: BasketService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) { }

  onChangeQuantity(evt: {quantity: number, product: BasketItem}) {
    const savedProducts = this.savedProducts$.getValue()
    const productIndex = savedProducts.findIndex(product => product._id === evt.product._id && product.format === evt.product.format)
    savedProducts[productIndex].quantity = evt.quantity
    this.basketService.updateProducts(savedProducts)
  }

  onRemoveProduct(item: BasketItem) {
    this.basketService.removeProduct(item)
    this.snackBar.open(this.translate.instant('BASKET.PRODUCT_REMOVED'), 'Ok', {
      duration: 3000,
    })
  }

}

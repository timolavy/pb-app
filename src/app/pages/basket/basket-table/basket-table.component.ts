import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

import { BasketItem } from '@resources/basket/basket.model'
import { environment } from '@env/environment'

@Component({
  selector: 'pb-basket-table',
  templateUrl: './basket-table.component.html',
  styleUrls: ['./basket-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketTableComponent {
  @Input() products: BasketItem[]

  @Output() changeQuantity: EventEmitter<{quantity: number, product: BasketItem}> = new EventEmitter()
  @Output() removeProduct: EventEmitter<BasketItem> = new EventEmitter()

  displayedColumns: string[] = [ 'packshot', 'label', 'format', 'quantity', 'actions', 'total' ]
  env = environment

  onChangeQuantity(quantity: number, product: BasketItem) {
    this.changeQuantity.emit({quantity, product})
  }

  onRemoveProduct(product: BasketItem) {
    this.removeProduct.emit(product)
  }
}

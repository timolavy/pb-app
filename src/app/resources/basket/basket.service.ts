import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Illustration } from '../illustration/illustration.model'
import { BasketItem } from './basket.model'
import { Format } from '@resources/format/format.model'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products$: BehaviorSubject<BasketItem[]> = new BehaviorSubject([] as BasketItem[])

  constructor() {
    const storedProducts = localStorage.getItem('products')
    if (storedProducts) {
      this.products$.next(JSON.parse(storedProducts))
    }
  }

  addProduct(product: Illustration, selectedFormat: Format, selectedQuantity: number) {
    const alreadyStoredItems = this.products$.getValue()
    let item = alreadyStoredItems.find(i => i._id === product._id && i.format.format === selectedFormat.format)
    item = !item
      ? {
          _id: product._id,
          label: product.label,
          format: selectedFormat,
          image: product.images.packShot,
          quantity: selectedQuantity,
      }
      : {
        ...item,
        quantity: item.quantity + selectedQuantity,
      }

    const items = [
      ...alreadyStoredItems.filter(i => (i._id === item?._id && i.format.format !== selectedFormat.format) || i._id !== item?._id),
      item
    ]

    this.products$.next(items)
    localStorage.setItem('products', JSON.stringify(items))
  }

  updateProducts(products: BasketItem[]) {
    this.products$.next(products)
    localStorage.setItem('products', JSON.stringify(products))
  }

  removeProduct(product: BasketItem) {
    const filteredProducts = this.products$.getValue()
      .filter(i => (i._id === product._id && i.format.format !== product.format.format) || i._id !== product._id)
    this.products$.next(filteredProducts)
    localStorage.setItem('products', JSON.stringify(filteredProducts))
  }

}

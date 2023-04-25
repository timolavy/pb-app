import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'

import { BasketTableComponent } from './basket-table.component'
import { BasketItem } from '@resources/basket/basket.model'

describe('BasketTableComponent', () => {
  let component: BasketTableComponent
  let fixture: ComponentFixture<BasketTableComponent>

  const mockBasketItems: BasketItem[] = [
    {
      _id: '1',
      label: 'test 1',
      format: {
        _id: '1a',
        format: '1b',
        label: 'A4',
        price: 60,
      },
      image: 'image.jpg',
      quantity: 2,
    },
    {
      _id: '2',
      label: 'test 2',
      format: {
        _id: '2a',
        format: '2b',
        label: 'A3',
        price: 80,
      },
      image: 'image2.jpg',
      quantity: 1,
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketTableComponent ],
      imports: [
        TranslateModule.forChild(),
        HttpClientModule,
        MatTableModule,
      ],
      providers: [
        TranslateStore,
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(BasketTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('onChangeQuantity', () => {
    it('should emit changeQuantity event with the correct params', () => {
      
      spyOn(component.changeQuantity, 'emit')

      const quantity = 3 
      const product = mockBasketItems[0] 
      component.onChangeQuantity(quantity, product)

      expect(component.changeQuantity.emit).toHaveBeenCalledWith({quantity, product})
    })
  })

  describe('onRemoveProduct', () => {
    it('should emit removeProduct event with the correct params', () => {
      
      spyOn(component.removeProduct, 'emit')

      const product = mockBasketItems[0] 
      component.onRemoveProduct(product)

      expect(component.removeProduct.emit).toHaveBeenCalledWith(product)
    })
  })
})

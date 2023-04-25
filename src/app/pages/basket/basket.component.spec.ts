import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { BehaviorSubject, first } from 'rxjs'
import { MatTableModule } from '@angular/material/table'

import { BasketComponent } from './basket.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { BasketBannerComponent } from './basket-banner/basket-banner.component'
import { BasketTableComponent } from './basket-table/basket-table.component'
import { BasketService } from '@resources/basket/basket.service'
import { environment } from '@env/environment'
import { BasketItem } from '@resources/basket/basket.model'

describe('BasketComponent', () => {
  let component: BasketComponent
  let fixture: ComponentFixture<BasketComponent>
  let mockBasketService: jasmine.SpyObj<BasketService>

  let mockBasketItems: BasketItem[] = []

  beforeEach(() => {
    mockBasketService = jasmine.createSpyObj([ 'updateProducts', 'removeProduct' ])
    mockBasketItems = [
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
    mockBasketService.products$ = new BehaviorSubject(mockBasketItems)

    TestBed.configureTestingModule({
      declarations: [
        BasketComponent,
        BasketTableComponent,
        BasketBannerComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forChild(),
        RouterTestingModule,
        LayoutModule,
        MatTableModule,
      ],
      providers: [
        { provide: BasketService, useValue: mockBasketService },
        { provide: environment, useValue: { production: false } },
        TranslateStore,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(BasketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('savedProducts$', () => {
    it('should affect the correct values for savedProducts$', () => {
      component.savedProducts$.pipe(first()).subscribe(products => {
        expect(products).toEqual(mockBasketItems)
      })
    })
  })

  describe('totalHT$', () => {
    it('should affect the correct values for totalHT$', () => {
      component.totalHT$.pipe(first()).subscribe(totalHT => {
        expect(totalHT).toEqual(200)
      })
    })
  })

  describe('applyDiscount$', () => {
    it('should affect the correct values for applyDiscount$', () => {
      component.applyDiscount$.pipe(first()).subscribe(apply => {
        expect(apply).toEqual(true)
      })
    })
  })

  describe('total$', () => {
    it('should affect the correct values for total$', () => {
      component.total$.pipe(first()).subscribe(total => {
        expect(total).toEqual(200)
      })
    })
  })
  
  describe('onChangeQuantity', () => {
    it('should call the basket service to update the quantity of an item when the quantity is changed', () => {
      const newQuantity = 3
      const product = mockBasketItems[0]
      const expectedProduct = {
        ...mockBasketItems[0],
        quantity: 3,
      }
      
      component.onChangeQuantity({quantity: newQuantity, product})
  
      expect(mockBasketService.updateProducts).toHaveBeenCalledWith([expectedProduct, mockBasketItems[1]])
    })
  })

  describe('onRemoveProduct', () => {
    it('should call the basket service to update the quantity of an item when the quantity is changed', () => {
      const product = mockBasketItems[0]
      
      component.onRemoveProduct(product)
  
      expect(mockBasketService.removeProduct).toHaveBeenCalledWith(product)
    })
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'

import { QuantitySelectorComponent } from './quantity-selector.component'

describe('QuantitySelectorComponent', () => {
  let component: QuantitySelectorComponent
  let fixture: ComponentFixture<QuantitySelectorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelectorComponent ],
      imports: [
        TranslateModule.forChild(),
        MatIconModule,
      ],
      providers: [
        TranslateStore,
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(QuantitySelectorComponent)
    component = fixture.componentInstance
    component.quantity = 2
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('increase', () => {
    it('should emit changeQuantity event with the correct params', () => {
      spyOn(component.changeQuantity, 'emit')

      component.increase()

      expect(component.changeQuantity.emit).toHaveBeenCalledWith(3)
    })
  })

  describe('decrease', () => {
    it('should emit changeQuantity event with the correct params', () => {
      spyOn(component.changeQuantity, 'emit')

      component.decrease()

      expect(component.changeQuantity.emit).toHaveBeenCalledWith(1)
    })
  })

})

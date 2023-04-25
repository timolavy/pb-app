import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'

import { BasketBannerComponent } from './basket-banner.component'

describe('BasketBannerComponent', () => {
  let component: BasketBannerComponent
  let fixture: ComponentFixture<BasketBannerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketBannerComponent ],
      imports: [
        TranslateModule.forChild(),
      ],
      providers: [
        TranslateStore,
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(BasketBannerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

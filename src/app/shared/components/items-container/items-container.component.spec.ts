import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'

import { ItemsContainerComponent } from './items-container.component'
import { ItemCardComponent } from './item-card/item-card.component'

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent
  let fixture: ComponentFixture<ItemsContainerComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsContainerComponent,
        ItemCardComponent,
      ],
      imports: [
        TranslateModule.forChild(),
      ],
      providers: [
        TranslateStore,
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ItemsContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

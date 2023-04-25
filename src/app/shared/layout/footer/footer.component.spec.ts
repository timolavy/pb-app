import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import {FooterComponent} from './footer.component'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        TranslateModule.forChild(),
      ],
      providers: [
        TranslateStore,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

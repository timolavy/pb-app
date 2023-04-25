import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

import { HeaderComponent } from './header.component'
import { LoginPopupComponent } from './login-popup/login-popup.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LoginPopupComponent,
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forChild(),
        RouterTestingModule,
        MatIconModule,
        MatMenuModule,
      ],
      providers: [
        TranslateStore,
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

describe('LayoutComponent', () => {
  let component: LayoutComponent
  let fixture: ComponentFixture<LayoutComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
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
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

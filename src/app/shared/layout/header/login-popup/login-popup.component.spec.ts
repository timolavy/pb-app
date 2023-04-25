import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { LoginPopupComponent } from './login-popup.component'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'

describe('LoginPopupComponent', () => {
  let component: LoginPopupComponent
  let fixture: ComponentFixture<LoginPopupComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginPopupComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        GenericButtonModule,
      ],
      providers: [
        TranslateStore,
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(LoginPopupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { NotFoundComponent } from './not-found.component'
import { LayoutModule } from '@shared/layout/layout.module'

describe('NotFoundComponent', () => {
  let component: NotFoundComponent
  let fixture: ComponentFixture<NotFoundComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
      ],
      imports: [
        TranslateModule.forChild(),
        RouterTestingModule,
        MatSnackBarModule,
        LayoutModule,
      ],
      providers: [
        TranslateStore,
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(NotFoundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

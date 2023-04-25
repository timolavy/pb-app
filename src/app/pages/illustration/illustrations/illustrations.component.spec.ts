import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http'

import { IllustrationService } from '@resources/illustration/illustration.service'
import { IllustrationsComponent } from './illustrations.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { ItemsContainerModule } from '@shared/components/items-container/items-container.module'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'

describe('IllustrationsComponent', () => {
  let component: IllustrationsComponent
  let fixture: ComponentFixture<IllustrationsComponent>
  let illustrationService: jasmine.SpyObj<IllustrationService>

  beforeEach(
    waitForAsync(() => {
      illustrationService = jasmine.createSpyObj('IllustrationService', ['getIllustrations'])
      TestBed.configureTestingModule({
        declarations: [ IllustrationsComponent ],
        imports: [
          RouterTestingModule,
          HttpClientModule,
          TranslateModule.forChild(),
          LayoutModule,
          ItemsContainerModule,
          GenericButtonModule,
        ],
        providers: [
          { provide: IllustrationService, useValue: illustrationService },
          TranslateStore,
        ],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationsComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('canLoadMore$', () => {
    it('should be true when maxItems is greater than perPage', () => {
      component.maxItems$.next(20)
      component.illustrationsParams$.next({ perPage: 10 })
      fixture.detectChanges()
      component.canLoadMore$.subscribe(canLoadMore => {
        expect(canLoadMore).toBeTrue()
      })
    })

    it('should be false when maxItems is less than or equal to perPage', () => {
      component.maxItems$.next(10)
      component.illustrationsParams$.next({ perPage: 10 })
      fixture.detectChanges()
      component.canLoadMore$.subscribe(canLoadMore => {
        expect(canLoadMore).toBeFalse()
      })
    })
  })

  describe('loadMoreProduct', () => {
    it('should increase perPage by defaultPerPage', () => {
      const perPage = component.illustrationsParams$.value.perPage
      component.loadMoreProduct()
      expect(component.illustrationsParams$.value.perPage).toEqual(perPage + component.defaultPerPage)
    })
  })
})
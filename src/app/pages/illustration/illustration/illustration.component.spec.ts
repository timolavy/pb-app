import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'
import { of, first } from 'rxjs'
import { NgxImageZoomModule } from 'ngx-image-zoom'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'

import { IllustrationComponent } from './illustration.component'
import { Illustration } from '@resources/illustration/illustration.model'
import { BasketService } from '@resources/basket/basket.service'
import { Format } from '@resources/format/format.model'
import { LayoutModule } from '@shared/layout/layout.module'
import { IllustrationImageComponent } from './illustration-image/illustration-image.component'
import { IllustrationDescriptionComponent } from './illustration-description/illustration-description.component'
import { QuantitySelectorModule } from '@shared/components/quantity-selector/quantity-selector.module'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'
import { CollectionImagesModule } from '@shared/components/collection-images/collection-images.module'

describe('IllustrationComponent', () => {
  let component: IllustrationComponent
  let fixture: ComponentFixture<IllustrationComponent>
  let mockActivatedRoute
  let mockBasketService: BasketService
  let illustration: Illustration

  beforeEach(async () => {
    illustration = {
      _id: '621777002ec6810016655e18',
      label: 'Jane',
      details: 'Édition limitée 100 exemplaires, numérotés et signés<br>Papier mat artistique 200g<br>Formats 30×40 – 50×70',
      category: {
        _id: '617e8e64c7128c0016190a31',
        label: 'Limited Edition'
      },
      collec: {
        _id: '61800d8b2fbe9b0016b22116',
        images: {
          home: '23.png',
          collections: '9.png',
          details: [
            '19.png',
            '22.png',
            '20.png'
          ]
        },
        collaboration: false,
        label: 'Hip-Hop Classic',
        theme: {
          _id: '617e8e37c7128c0016190a2f',
          label: 'Summer'
        },
        description: 'xxx',
        collaborationDescription: ''
      },
      theme: {
        _id: '617e8e37c7128c0016190a2f',
        label: 'Summer'
      },
      formats: [
        {
          _id: '6272cca65b66d00016a7fdf9',
          format: '617e8e21c7128c0016190a2d',
          label: '30x40 cm',
          price: 60
        },
        {
          _id: '6272cca65b66d00016a7fdfa',
          format: '6187dbe9827833001643424a',
          label: '50x70 cm',
          price: 90
        }
      ],
      stock: 100,
      images: {
        settingScene: 'jane-detail',
        packShot: 'jane.png',
        details: []
      }
    }

    mockActivatedRoute = {
      data: of({ illustration }),
    }

    mockBasketService = jasmine.createSpyObj(['addProduct'])

    await TestBed.configureTestingModule({
      declarations: [
        IllustrationComponent,
        IllustrationImageComponent,
        IllustrationDescriptionComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forChild(),
        HttpClientModule,
        NgxImageZoomModule,
        MatFormFieldModule,
        MatSelectModule,
        LayoutModule,
        QuantitySelectorModule,
        GenericButtonModule,
        CollectionImagesModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: BasketService, useValue: mockBasketService },
        TranslateStore,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set illustration on initialization', () => {
    component.illustration$.subscribe((illustration) => {
      expect(illustration).toEqual(illustration)
      component.selectedFormat$.pipe(first()).subscribe(format => {
        expect(format).toEqual(illustration.formats[0])
      })
      component.selectedImage$.pipe(first()).subscribe(image => {
        expect(image).toEqual(illustration.images.packShot)
      })
    })
  })

  describe('onSelectImage', () => {
    it('should update selected image when onSelectImage is called', () => {
      const selectedImage = 'test.jpg'
      component.onSelectImage(selectedImage)
      component.selectedImage$.pipe(first()).subscribe(image => {
        expect(image).toEqual(selectedImage)
      })
    })
  })

  describe('onChangeFormat', () => {
    it('should update selected format when onChangeFormat is called', () => {
      const format: Format = {
        _id: '6272cca65b66d00016a7fdf9',
        format: '617e8e21c7128c0016190a2d',
        label: '30x40 cm',
        price: 60
      }
      component.onChangeFormat(format)
      component.selectedFormat$.pipe(first()).subscribe(selected => {
        expect(selected).toEqual(format)
      })
    })
  })

  describe('onChangeQuantity', () => {
    it('should update selected quantity when onChangeQuantity is called', () => {
      const quantity = 5
      component.onChangeQuantity(quantity)
      expect(component.selectedQuantity$.getValue()).toEqual(quantity)
    })
  })

  describe('onAddToCart', () => {
    it('should call basketService.addProduct when onAddToCart is called', () => {
      component.onAddToCart({
        illustration: illustration,
        selectedFormat: illustration.formats[0],
        selectedQuantity: 1,
      })
      expect(mockBasketService.addProduct).toHaveBeenCalledWith(illustration, illustration.formats[0], 1)
    })
  })
})
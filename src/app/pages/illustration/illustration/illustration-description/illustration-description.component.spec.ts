import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule, TranslateStore } from '@ngx-translate/core'
import { FormsModule } from '@angular/forms'
import { MatSelectChange, MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { Format } from '@resources/format/format.model'
import { IllustrationDescriptionComponent } from './illustration-description.component'
import { QuantitySelectorModule } from '@shared/components/quantity-selector/quantity-selector.module'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'

describe('IllustrationDescriptionComponent', () => {
  let component: IllustrationDescriptionComponent
  let fixture: ComponentFixture<IllustrationDescriptionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationDescriptionComponent ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forChild(),
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        QuantitySelectorModule,
        GenericButtonModule,
      ],
      providers: [
        TranslateStore,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationDescriptionComponent)
    component = fixture.componentInstance
    component.illustration = {
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
    component.selectedFormat = {
      _id: '6272cca65b66d00016a7fdfa',
      format: '6187dbe9827833001643424a',
      label: '50x70 cm',
      price: 90
    }
    component.selectedQuantity = 1
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('onChangeFormat', () => {
    it('should emit changeFormat event with the selected format', () => {
      const format: Format = {
        _id: '6272cca65b66d00016a7fdf9',
        format: '617e8e21c7128c0016190a2d',
        label: '30x40 cm',
        price: 60
      }
      spyOn(component.changeFormat, 'emit')
      const change: MatSelectChange = { value: format } as MatSelectChange

      component.onChangeFormat(change)

      expect(component.changeFormat.emit).toHaveBeenCalledWith(format)
    })
  })

  describe('onChangeQuantity', () => {
    it('should emit changeQuantity event with the selected quantity', () => {
      const quantity = 3
      spyOn(component.changeQuantity, 'emit')

      component.onChangeQuantity(quantity)

      expect(component.changeQuantity.emit).toHaveBeenCalledWith(quantity)
    })
  })

  describe('onAddToCart', () => {
    it('should emit addToCart event with the illustration, selected format and quantity', () => {
      spyOn(component.addToCart, 'emit')
      
      component.onAddToCart()

      expect(component.addToCart.emit).toHaveBeenCalledWith({
        illustration: component.illustration,
        selectedFormat: component.selectedFormat,
        selectedQuantity: component.selectedQuantity,
      })
    })
  })
})

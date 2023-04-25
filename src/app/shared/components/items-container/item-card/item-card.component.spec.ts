import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ItemCardComponent } from './item-card.component'

describe('ItemCardComponent', () => {
  let component: ItemCardComponent
  let fixture: ComponentFixture<ItemCardComponent>

  const mockIllustration = {
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardComponent ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(ItemCardComponent)
    component = fixture.componentInstance
    component.item = mockIllustration
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

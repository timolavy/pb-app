import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxMasonryModule } from 'ngx-masonry'

import { CollectionImagesComponent } from './collection-images.component'

describe('CollectionImagesComponent', () => {
  let component: CollectionImagesComponent
  let fixture: ComponentFixture<CollectionImagesComponent>

  const mockCollection = {
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
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionImagesComponent ],
      imports: [
        BrowserAnimationsModule,
        NgxMasonryModule,
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(CollectionImagesComponent)
    component = fixture.componentInstance
    component.collection = mockCollection
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

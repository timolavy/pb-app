import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NgxImageZoomModule } from 'ngx-image-zoom'

import { IllustrationImageComponent } from './illustration-image.component'

describe('IllustrationImageComponent', () => {
  let component: IllustrationImageComponent
  let fixture: ComponentFixture<IllustrationImageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationImageComponent ],
      imports: [
        NgxImageZoomModule,
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(IllustrationImageComponent)
    component = fixture.componentInstance
    component.images = {
      settingScene: 'settingScene.jpg',
      packShot: 'packShot.jpg',
      details: [ 'detail1.jpg' ]
    }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('onSelectImage', () => {
    it('should emit selectImage event when an image is selected', () => {
      spyOn(component.selectImage, 'emit')
      component.onSelectImage('settingScene.jpg')
      fixture.detectChanges()
      expect(component.selectImage.emit).toHaveBeenCalledWith('settingScene.jpg')
    })
  })
})

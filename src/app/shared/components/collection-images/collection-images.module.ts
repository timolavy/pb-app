import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxMasonryModule } from 'ngx-masonry'

import { CollectionImagesComponent } from './collection-images.component'

@NgModule({
  declarations: [
    CollectionImagesComponent,
  ],
  imports: [
    CommonModule,
    NgxMasonryModule,
  ],
  exports: [
    CollectionImagesComponent,
  ],
})
export class CollectionImagesModule { }

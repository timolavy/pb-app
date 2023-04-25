import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgxMasonryOptions } from 'ngx-masonry'

import { environment } from '@env/environment'
import { Collection } from '@resources/collection/collection.model'

@Component({
  selector: 'pb-collection-images',
  templateUrl: './collection-images.component.html',
  styleUrls: ['./collection-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionImagesComponent {
  @Input() collection: Collection

  env = environment
  masonryOptions: NgxMasonryOptions = {
    gutter: 50,
    fitWidth: true,
  }

  trackByFn(index: number) {
    return index
  }
}

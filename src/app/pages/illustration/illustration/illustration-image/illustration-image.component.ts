import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

import { IllustrationImages } from '@resources/illustration/illustration.model'
import { environment } from '@env/environment'

@Component({
  selector: 'pb-illustration-image',
  templateUrl: './illustration-image.component.html',
  styleUrls: ['./illustration-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationImageComponent {
  @Input() images: IllustrationImages
  @Input() selectedImage: string

  @Output() selectImage: EventEmitter<string> = new EventEmitter()

  env = environment

  constructor() { }

  onSelectImage(selected: string) {
    this.selectImage.emit(selected)
  }

  trackByFn(index: number) {
    return index
  }

}

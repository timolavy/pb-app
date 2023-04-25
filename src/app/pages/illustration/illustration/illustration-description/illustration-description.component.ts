import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'

import { Illustration } from '@resources/illustration/illustration.model'
import { Format } from '@resources/format/format.model'

@Component({
  selector: 'pb-illustration-description',
  templateUrl: './illustration-description.component.html',
  styleUrls: ['./illustration-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationDescriptionComponent {
  @Input() illustration: Illustration
  @Input() selectedFormat: Format
  @Input() selectedQuantity: number

  @Output() changeFormat: EventEmitter<Format> = new EventEmitter()
  @Output() changeQuantity: EventEmitter<number> = new EventEmitter()
  @Output() addToCart: EventEmitter<{illustration : Illustration, selectedFormat: Format, selectedQuantity: number}> = new EventEmitter()

  constructor() { }

  onChangeFormat(change: MatSelectChange): void {
    this.changeFormat.emit(change.value)
  }

  onChangeQuantity(quantity: number): void {
    this.changeQuantity.emit(quantity)
  }

  onAddToCart(): void {
    this.addToCart.emit({
      illustration: this.illustration,
      selectedFormat: this.selectedFormat,
      selectedQuantity: this.selectedQuantity,
    })
  }

  trackByFn(index: number) {
    return index
  }
}

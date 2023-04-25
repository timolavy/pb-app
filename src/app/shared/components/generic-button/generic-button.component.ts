import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

export type color = 'primary' | 'secondary'

@Component({
  selector: 'pb-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericButtonComponent {
  @Input() label: string
  @Input() color: color = 'primary'
  @Input() disabled: Boolean = false

  @Output() pbClick: EventEmitter<void> = new EventEmitter()

}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Illustration } from '@resources/illustration/illustration.model'

@Component({
  selector: 'pb-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent {
  @Input() items: Illustration[] = []

  constructor() { }

  trackByFn(index: number) {
    return index
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'pb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @Input() color: string = 'black'

  constructor() { }

}

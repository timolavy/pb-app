import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'pb-basket-banner',
  templateUrl: './basket-banner.component.html',
  styleUrls: ['./basket-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketBannerComponent { }

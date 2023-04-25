import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { AuthService } from '@resources/auth/auth.service'
import { BasketService } from '@resources/basket/basket.service'
import { I18nService } from '@resources/i18n/i18n.service'

@Component({
  selector: 'pb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() color = 'white'

  savedProducts$ = this.basketService.products$
  showAuthenticationPop = false
  currentLang = this.translate.currentLang
  navs = [
    { route: '/collections', text: 'HEADER.COLLECTIONS' },
    { route: '/illustrations', text: 'HEADER.ILLUSTRATIONS' },
    { route: '/brand', text: 'HEADER.BRAND' },
    { route: '/journal', text: 'HEADER.JOURNAL' },
  ]

  constructor(
    public authService: AuthService,
    private basketService: BasketService,
    private i18nService: I18nService,
    private translate: TranslateService,
  ) { }

  toggleAuthenticationPopup(shouldShow: boolean) {
    this.showAuthenticationPop = shouldShow
  }

  changeLang(lang: string) {
    this.currentLang = lang
    this.i18nService.changeLang(lang)
  }

  trackByFn(index: number) {
    return index
  }
}

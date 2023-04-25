import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { AccountRoutingModule } from './account-routing.module'
import { AccountComponent } from './account.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { I18nService } from '@resources/i18n/i18n.service'

import accountEN from './lang/en/account.json'
import accountdFR from './lang/fr/account.json'

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LayoutModule,
    TranslateModule,
  ],
})
export class AccountModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', accountEN)
    this.i18nService.addTranslations('fr', accountdFR)
  }
}

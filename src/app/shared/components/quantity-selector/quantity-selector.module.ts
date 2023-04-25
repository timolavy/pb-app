import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { QuantitySelectorComponent } from './quantity-selector.component'
import { I18nService } from '@resources/i18n/i18n.service'

import quantitySelectorEN from './lang/en/quantity-selector.json'
import quantitySelectorFR from './lang/fr/quantity-selector.json'

@NgModule({
  declarations: [
    QuantitySelectorComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    QuantitySelectorComponent,
  ],
})
export class QuantitySelectorModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', quantitySelectorEN)
    this.i18nService.addTranslations('fr', quantitySelectorFR)
  }
}

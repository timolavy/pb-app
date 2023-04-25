import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { ItemsContainerComponent } from './items-container.component'
import { ItemCardComponent } from './item-card/item-card.component'
import { I18nService } from '@resources/i18n/i18n.service'

import itemsContainerEN from './lang/en/items-container.json'
import itemsContainerFR from './lang/fr/items-container.json'

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    ItemsContainerComponent,
  ],
})
export class ItemsContainerModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', itemsContainerEN)
    this.i18nService.addTranslations('fr', itemsContainerFR)
  }
}

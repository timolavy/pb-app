import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'

import { GenericButtonComponent } from './generic-button.component'
import { I18nService } from '@resources/i18n/i18n.service'

import genericButtonEN from './lang/en/generic-button.json'
import genericButtonFR from './lang/fr/generic-button.json'

@NgModule({
  declarations: [
    GenericButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    GenericButtonComponent,
  ],
})
export class GenericButtonModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', genericButtonEN)
    this.i18nService.addTranslations('fr', genericButtonFR)
  }
}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MatButtonModule } from '@angular/material/button'

import { NotFoundRoutingModule } from './not-found-routing.module'
import { NotFoundComponent } from './not-found.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { I18nService } from '@resources/i18n/i18n.service'

import notFoundEN from './lang/en/not-found.json'
import notFoundFR from './lang/fr/not-found.json'

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    LayoutModule,
    TranslateModule,
    MatButtonModule,
  ],
})
export class NotFoundModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', notFoundEN)
    this.i18nService.addTranslations('fr', notFoundFR)
  }
}

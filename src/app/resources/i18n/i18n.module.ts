import { LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import localeFr from '@angular/common/locales/fr'

import { I18nService } from './i18n.service'

registerLocaleData(localeFr, 'fr')

export function localeFactory(i18nService: I18nService) {
  return i18nService.provideLOCALE()
}

@NgModule({
  imports: [
    TranslateModule.forRoot(),
  ],
  exports: [
    TranslateModule,
  ],
  declarations: [],
  providers: [
    I18nService,
    {
      provide: LOCALE_ID,
      deps: [ I18nService ],
      useFactory: localeFactory,
    },
  ],
})
export class I18nModule { }

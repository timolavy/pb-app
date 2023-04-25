import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import * as moment from 'moment'
import { Observable, from } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class I18nService {

  constructor(
    private translate: TranslateService,
  ) { }

  setup(): void {
    const availableLanguages = ['fr', 'en']
    const storedLang = localStorage.getItem('language')
    if (storedLang && availableLanguages.includes(storedLang)) {
      this.changeLang(storedLang)
    } else {
      const browserLang = this.translate.getBrowserLang()
      if (browserLang && availableLanguages.includes(browserLang)) {
        this.changeLang(browserLang)
      } else {
        this.changeLang('en')
      }
    }
    this.translate.setDefaultLang('en')
  }

  changeLang(lang: string): void {
    moment.locale(lang)
    this.translate.use(lang)
    localStorage.setItem('language', lang)
  }

  addTranslations(lang: string, data: object): void {
    this.translate.setTranslation(lang, data, true)
  }

  provideLOCALE(lang = 'fr'): string {
    switch (lang) {
      case 'fr':
        return 'fr-FR'
      case 'en':
      default:
        return 'en-GB'
    }
  }
}

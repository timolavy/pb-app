import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthInterceptor } from '@resources/auth/auth.interceptor'
import { I18nModule } from '@resources/i18n/i18n.module'
import { I18nService } from '@resources/i18n/i18n.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    I18nModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.setup()
  }
}

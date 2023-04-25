import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IllustrationsComponent } from './illustrations/illustrations.component'
import { IllustrationComponent } from './illustration/illustration.component'
import { IllustrationResolver } from '@resources/illustration/illustration.resolver'

const routes: Routes = [
  {
    path: '',
    component: IllustrationsComponent,
  },
  {
    path: ':illustrationId',
    component: IllustrationComponent,
    resolve: {
      illustration: IllustrationResolver,
    },
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class IllustrationsRoutingModule { }

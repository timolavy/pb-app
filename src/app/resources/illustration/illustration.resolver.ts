import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

import { Illustration } from './illustration.model'
import { IllustrationService } from './illustration.service'

@Injectable({
  providedIn: 'root'
})
export class IllustrationResolver {
    
  constructor(private illustrationService: IllustrationService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Illustration> {
    const id = <string>route.paramMap.get('illustrationId')
    return this.illustrationService.getIllustration(id)
  }
}


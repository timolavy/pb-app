import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '@env/environment'
import { Illustration, IllustrationApiResponse, IllustrationParams } from '@resources/illustration/illustration.model'

@Injectable({
  providedIn: 'root'
})
export class IllustrationService {

  constructor(
    private http: HttpClient,
  ) { }

  getIllustrations(httpParams?: IllustrationParams): Observable<IllustrationApiResponse> {
    const params = new HttpParams({fromObject: {...httpParams}})

    return this.http.get<{illustrations: Illustration[], maxItems: number}>(environment.apiUrl + '/illustrations.json', {params})
  }

  getIllustration(id: string): Observable<Illustration> {
    return this.http.get<Illustration>(`${environment.apiUrl}/illustrations-${id}.json`)
  }

}

import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    login(values: {email: string, password: string}): Observable<boolean> {
      if (values.email === 'test@gmail.com' && values.password === 'p@ssword!') {
        this.setSession({token: 'secret-token', expiresIn: 3000})
        return of(true)
      }

      return of(false)
    }

    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('expires_at')
      this.router.navigate(['/'])
    }

    isLoggedIn() {
      return moment().isBefore(this.getExpiration())
    }

    isLoggedOut() {
      return !this.isLoggedIn()
    }

    getExpiration() {
      const expiration = localStorage.getItem('expires_at')
      if (expiration) {
        const expiresAt = JSON.parse(expiration)
        return moment(expiresAt)
      }

      return null
    }

    private setSession(authResult: {token: string, expiresIn: number}) {
      const expiresAt = moment().add(authResult.expiresIn, 'second')

      localStorage.setItem('token', authResult.token)
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()))
    }
}

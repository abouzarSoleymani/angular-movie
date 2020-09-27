import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/user';
import {Role} from '../enums/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject$: BehaviorSubject<User> =  new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.currentUserSubject$.next(user);
    //     return user;
    //   }));
    const user: User = {
      username, password
    }
    user.role = username === 'test' ? Role.USER : Role.ADMIN;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject$.next(user);
    return of(user)
  }

  getUserInfo(): Observable<User> {
    return  this.currentUserSubject$.asObservable();
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerGuard implements CanActivate {
  constructor(private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role: string = localStorage.getItem('role')!
    if(!role.toLowerCase().includes('petowner')){
      this.router.navigate(['/home'])
    }
    return true
  }

}

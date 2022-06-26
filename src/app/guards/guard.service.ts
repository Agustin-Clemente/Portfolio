import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  realRol: string;

  constructor( private tokenServ: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    const roles= this.tokenServ.getAuthorities();
    this.realRol="user";
    roles.forEach(rol =>{
      if(rol === 'ROLE_ADMIN'){
        this.realRol = 'admin';
      }
    });
    if(!this.tokenServ.getToken() || expectedRol.indexOf(this.realRol) === -1){
      this.router.navigate(['/portfolio']);
      return false;
    }
    return true;
  }
  
}

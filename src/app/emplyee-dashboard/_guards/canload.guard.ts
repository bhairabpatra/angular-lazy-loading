import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {




  canLoad(route: Route) {
    console.log('Url:'+ route.path);
    if (route.path=='employee') {
      alert('You are not authorised to visit this page');
      return false;
    }
    return true;
    }

  }




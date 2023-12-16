import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from '@services';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService {
  constructor(public storageService: StorageService, public router: Router) {}

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    console.log('Role Based guard is working');
    return true;
  }
}

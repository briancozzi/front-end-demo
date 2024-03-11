import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@services';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(
    private router: Router,
    private storageService: StorageService,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {}

  public handleError(err: any) {
    if (err.status === 403 || err.status === 401) {
      this.closeAllModals();
      this.router.navigate(['/']);
      this.storageService.deleteUser();
    }
    if (isPlatformBrowser(this.platformID)) {
      if (!navigator.onLine) {
        console.log('Internet not found');
        // this.toastrService.error(
        //   'Error',
        //   'Internet Connection lost. Refresh after connecting to internet.'
        // );
      } else if (err.status === 0) {
        // this.closeAllModals();
        this.router.navigate(['/']);
        this.storageService.deleteUser();
      }
    }
  }

  closeAllModals() {
    document.querySelectorAll('.modal').forEach((el) => el.remove());
    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@services';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  public onlineFlag = navigator.onLine;

  constructor(private router: Router, private storageService: StorageService) {}

  public handleError(err: any) {
    if (err.status === 403 || err.status === 401) {
      console.log('Its 403 / 401');
      this.closeAllModals();
      this.router.navigate(['/']);
      this.storageService.deleteUser();
    }
    if (!this.onlineFlag) {
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

  closeAllModals() {
    document.querySelectorAll('.modal').forEach((el) => el.remove());
    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
  }
}

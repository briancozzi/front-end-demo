import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MiscUtilitiesService {
  constructor() {}

  scrollToError() {
    const firstElementWithError = document.querySelector(
      '.ng-invalid:not(form)'
    );
    if (firstElementWithError) {
      firstElementWithError.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  smoothScrollById(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  }

  capitalizeFirst(val: string) {
    let text: string;
    text = val
      ?.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    return text;
  }
}

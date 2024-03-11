import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  bindingData?: { data: string };
  title = 'eventlify-frontend';
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformID)) {
      this.httpClient
        .get('https://dummyjson.com/products')
        .subscribe((r: any) => {
          this.bindingData = r;
        });
    } else if (isPlatformBrowser(this.platformID)) {
      console.log('this block runs only on client');
      this.httpClient
        .get('https://dummyjson.com/products')
        .subscribe((r: any) => {
          this.bindingData = r;
        });
    }
  }
}

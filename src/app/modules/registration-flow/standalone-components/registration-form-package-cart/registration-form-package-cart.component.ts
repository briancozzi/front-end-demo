import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-registration-form-package-cart',
  templateUrl: './registration-form-package-cart.component.html',
  styleUrls: ['./registration-form-package-cart.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AutoCompleteModule, DropdownModule],
})
export class RegistrationFormPackageCartComponent implements OnInit {
  cartItems: any[] = [
    {
      name: 'Mulligan ',
      numberOfTickets: 4,
      price: '40000',
      qty: 1,
    },
    {
      name: 'Tee ',
      numberOfTickets: 4,
      price: '10000',
      qty: 2,
    },
  ];
  selectedUser: any;
  users: any[] = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry1',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry2',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry3',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry4',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry5',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry6',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
    },
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst7',
      maidenName: 'Smitham',
    },
  ];
  filteredUsers: any[] = [];
  @Output() OnClose = new EventEmitter<null>();
  constructor() {}

  ngOnInit() {}

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.users as any[]).length; i++) {
      let user = (this.users as any[])[i];
      if (user.firstName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }

    this.filteredUsers = filtered;
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
      this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
        { label: 'Add Activity', icon: 'pi pi-plus', routerLink: 'add_Activity' },
        { label: 'Display Activities', icon: 'pi pi-fw pi-pencil', routerLink: 'display_Activities' },
        { label: 'Edit Profile', icon: 'pi pi-user-edit', routerLink: 'profile' },
      ];

        this.activeItem = this.items[0];
    }
}

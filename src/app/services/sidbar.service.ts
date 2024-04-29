import { Injectable } from '@angular/core';
import { SidbarItem } from '../models/sidbar-item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidbarService {
  navigation: SidbarItem[] = [
    {
      id: 1,
      text: 'Dashboard',
      icon: 'mediumiconslayout',
      path: '',
      submenu: [],
    },
    { id: 2, text: 'Account', icon: 'user', path: 'account', submenu: [] },
    // { id: 2, text: 'Users', icon: 'group', path: 'users' },
    // { id: 2, text: 'Projects', icon: 'folder', path: 'projects' },
    // { id: 2, text: 'Tasks', icon: 'selectall', path: 'tasks' },
    { id: 3, text: 'Social', icon: 'video', path: 'social', submenu: [] },
    {
      id: 4,
      text: 'Corporate',
      icon: 'chart',
      path: 'corporate',
      submenu: [
        {
          id: '4',
          text: 'Corporate',
          items: [
            {
              id: '4_1',
              text: 'About Us',
              path: 'corporate',
            },
            {
              id: '4_2',
              text: 'Our Team',
              path: '/team',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      text: 'Settings',
      icon: 'preferences',
      path: 'settings',
      submenu: [],
    },
  ];
  constructor(private route: Router) {}

  selectedItem: SidbarItem = {
    id: 1,
    text: 'Dashboard',
    icon: 'mediumiconslayout',
    path: '',
    submenu: [],
  };
  path!: string;

  // it's a function to handle the drawer list item selected for passing the current text select from drower to header component
  // sidbarItemHandler(id: number) : void{
  //    this.selectedItem = this.navigation.filter((sidbarItem: SidbarItem) => {
  //     return sidbarItem.id == id;
  //   })[0];

  //   this.CurrentPath()
  // }

  // CurrentPath is a function retrive the current path for passe to header component
  CurrentPath(): string {
    this.path = this.route.url.slice(1, this.route.url.length);
    if (this.path == '') {
      return 'Dashboard';
    }
    return this.path[0].toUpperCase() + this.path.slice(1, this.path.length);
  }
}

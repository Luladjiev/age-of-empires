import { Component, OnInit } from '@angular/core';

interface Tab {
  name: string;
  id: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public tabs: Array<Tab> = [
    { id: 'home', name: 'Home' },
    { id: 'articles', name: 'Articles' },
    { id: 'my-profile', name: 'My Profile' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

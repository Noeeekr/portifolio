import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

import Link from "./components/link";

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [CommonModule, Link],
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.scss'],
})

export default class Navigation {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

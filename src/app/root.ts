import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import RegisterIcon from '@services/icon.service';


@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './root.html',
  styleUrl: './root.scss'
})

export default class Root {
  constructor(private RegisterIcon: RegisterIcon){}
} 

import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = routes
    .map( (route) => route?.children ?? [] )
    .flat()
    .filter( (route) => route && route.path )
    .filter( (route) => !route.path?.includes(':') )

}

import { Component, inject } from '@angular/core';
import { UsersService } from '@interfaces/users.service'; // se configura la ruta en el tsconfig.json
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';
// import { UsersService } from '../../../services/users.service.js';


@Component({
  standalone: true,
  imports: [ TitleComponent, RouterModule ],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public usersService = inject( UsersService )


}

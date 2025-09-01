import { Component, inject } from '@angular/core';
import { UsersService } from '@interfaces/users.service'; // se configura la ruta en el tsconfig.json
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';
// import { UsersService } from '../../../services/users.service.js';


@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './users.component.html',
    styles: ``
=======
  standalone: true,
  imports: [ TitleComponent, RouterModule ],
  templateUrl: './users.component.html',
  styles: ``
>>>>>>> myDashboard-test
})
export default class UsersComponent {

  public usersService = inject( UsersService )


}

import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@interfaces/users.service.js';

@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './user.component.html',
    styles: ``
=======
  standalone: true,
  imports: [ TitleComponent ],
  template: `
    <app-title [title]="titleLabel()"/>

    @if ( user() ) {

      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()?.first_name"
        />
        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <h3>{{ user()?.email }}</h3>
        </div>
      </section>

    } @else{
      <p>Cargando la información</p>
    }

  `
>>>>>>> myDashboard-test
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private userService = inject( UsersService )

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) =>  this.userService.getUserById(id) )
    )
  )

 public titleLabel= computed( () => {
    if(this.user()){
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return `Información del usuario:`
  })

  // 2 - public user = signal<User | undefined >(undefined); // asi nunca cambia la señal por eso no me muestra la info

  // 1 - Parametros como un observable
  // constructor(){
  //   this.route.params.subscribe( params => {
  //     console.log({params})
  //   })
  // }



}

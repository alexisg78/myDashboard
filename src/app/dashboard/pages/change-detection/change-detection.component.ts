import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './change-detection.component.html',
    styles: ``
=======
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title [title]="currentFramework()"/>
    <pre>{{frameworksAsSignal() | json }}</pre>
    <pre>{{frameworksAsProperty | json }}</pre>
 `,
>>>>>>> myDashboard-test
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${ this.frameworksAsSignal().name }`
  )

  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor(){
    setTimeout(() => {

      // this.frameworksAsProperty.name= 'React'   // en zoneJs, que venia activado por defecto el ChangeDetectionStrategy.default

      this.frameworksAsSignal.update( value  => ({
          ...value,
          name: 'React',
        })
      )

      console.log('Hecho');
    }, 3000);
  }

}

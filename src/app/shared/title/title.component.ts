import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
<<<<<<< HEAD
    selector: 'app-title',
    imports: [],
    templateUrl: './title.component.html',
    styles: ``
=======
  selector: 'app-title',
  standalone: true,
  imports: [],
  styles: ``,
  template: `
    <h1 class="text-3xl mb-5">{{title}}</h1>
  `
>>>>>>> myDashboard-test
})
export class TitleComponent {

  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

}

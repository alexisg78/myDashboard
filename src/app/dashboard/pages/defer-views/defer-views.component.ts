import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component.js';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './defer-views.component.html',
    styles: ``
=======
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',

>>>>>>> myDashboard-test
})
export default class DeferViewsComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
<<<<<<< HEAD
    imports: [],
    templateUrl: './defer-options.component.html',
    styles: ``
=======
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html'
>>>>>>> myDashboard-test
})
export default class DeferOptionsComponent {



}

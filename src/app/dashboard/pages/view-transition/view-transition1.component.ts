import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title title="View Transition 1"/>

    <section class="flex justify-start">
      <img
        srcset="https://fastly.picsum.photos/id/980/200/300.jpg?hmac=HeQeE7MnUiOHTOqHUI4GrY3wL5tloq1zukVClSAcUB8"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />
      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2;">
      </div>
    </section>

  `,
})
export default class ViewTransitionComponent {

}

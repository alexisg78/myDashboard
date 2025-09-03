import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  imports: [MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  styles: ``
})
export class OptionsBottomSheetComponent {

  openLink(event: MouseEvent){
    console.log('OpenLink', event);
  }

}
